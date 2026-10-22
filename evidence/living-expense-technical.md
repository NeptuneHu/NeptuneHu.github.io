# v3 技术设计

## 架构

前端继续使用原生 HTML、CSS 和 JavaScript，通过 `supabase-js` 连接 Supabase。Supabase 提供 Auth、PostgreSQL、RLS、Realtime、Storage 和 Edge Functions。

```text
浏览器 v3
  ├─ Auth：注册、登录、会话
  ├─ Database：profiles / budgets / expenses / user_settings
  ├─ Realtime：监听当前用户的 expenses 变化
  ├─ Storage：私有 backgrounds 桶
  └─ RPC / Edge Function：分类汇总与月度摘要
```

## 文件

| 文件 | 职责 |
| --- | --- |
| `index.html` | 登录、设置、主屏、账单和个人资料 |
| `style.css` | Apple 风格视觉令牌、响应式布局、深色模式与无障碍适配 |
| `app.js` | Supabase 会话、CRUD、Realtime、动态余额和账单 |
| `config.js` | Project URL 与 anon key，不包含 service role |
| `supabase/schema.sql` | 表、索引、触发器、RLS、Storage 策略和 RPC |
| `supabase/functions/monthly-summary/index.ts` | 月度摘要 Edge Function 示例 |

## 数据模型

- `profiles` 与 `auth.users` 为 1:1。
- 一个用户可以有多个 `budgets`，但客户端只使用最新的活动预算。
- 一个预算包含多条 `expenses`，删除预算时级联删除支出。
- `user_settings` 与用户为 1:1，记录 Storage 对象路径。

所有业务表都有 `user_id`。RLS 使用 `auth.uid() = user_id`，费用表同时校验预算属于当前用户。

## 动态余额

数据库保存预算金额、周期起点和收支流水。为兼容已经部署的数据库，进账沿用 `expenses` 表，以 `进账｜` 作为名称前缀、`其他` 作为兼容分类；界面层统一解析为进账类型。浏览器按当前时间计算：

```text
已过刻度 = floor(clamp(now - cycle_start, 0, 30 天) / 100ms)
已入账 = amount × 已过刻度 / 25,920,000
可支配 = 时间入账 + 额外进账 - 支出合计
```

这避免每 100 毫秒写数据库。页面后台恢复后仍能按真实时间校正。

## 账单导出

浏览器根据当前已同步的流水生成带 UTF-8 BOM 的 CSV，字段为类型、分类、备注、金额和时间。导出只读取当前用户通过 RLS 获得的数据，不上传到第三方服务。

## 界面实现

- 使用系统字体和语义色令牌；卡片、导航与弹层统一使用高透明毛玻璃，系统开启“减少透明度”时自动回退为实体表面。
- 生活费输入框接受任意有效金额，快捷金额仅作为可选辅助。
- 关键控件最小高度 44px，输入框带可见标签、状态文本和键盘焦点样式。
- `780px` 以上将主界面扩展为双栏；手机端保持单栏与安全区内边距。
- 支出分类按钮复用账单图表色；SVG 饼图分片带进入动画，并与图例和明细行进行指针/键盘联动。

## 实时同步

用户登录后订阅 `expenses` 表，并用 `user_id=eq.<uid>` 过滤。收到 INSERT、UPDATE 或 DELETE 后重新读取当前预算的支出，保证视图一致。退出登录时移除频道。

## Storage

背景对象路径为 `<user_id>/background.jpg`。桶保持私有，页面使用短时 signed URL 显示图片。Storage RLS 只允许用户操作自己目录内的对象。

## 安全

- 前端只保存公开的 anon key。
- 所有表启用 RLS。
- SQL 函数校验预算所有权。
- Auth 管理、封禁用户等操作只能在受保护的 Edge Function 中使用 service role，本版不在浏览器实现。
