# 番茄钟计时器开发说明

## 项目概述

Ember 是一款使用 25 分钟专注与 5 分钟休息循环的番茄钟工具。

## 设计要素

深棕色界面配合暖橙色进度环，突出剩余时间和当前专注状态。

## 页面与内容结构

页面包含模式切换、圆形倒计时、控制按钮、本周统计、时长设置和通知状态。

## 代码实现

React 与 TypeScript 实现计时状态；Notification API 发送到点提醒；Web Audio 播放提示音；LocalStorage 保存设置和完成记录。

## 关键实现过程

支持开始、暂停、重置、自定义工作与休息时长；计时期间页面标题显示剩余时间；完成后自动切换模式并更新今日和本周数量。

## 本地运行

执行 `pnpm install` 和 `pnpm run dev`，浏览器访问本地地址。

## 公网部署

已发布到 GitHub Pages：https://neptunehu.github.io/pomodoro/
