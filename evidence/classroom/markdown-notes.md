# Markdown 笔记应用开发说明

## 项目概述

Inkdown 是一款支持实时预览与代码高亮的 Markdown 笔记工具。

## 设计要素

采用暖白纸张色与深色笔记栏，编辑区和预览区并列显示，移动端自动改为上下布局。

## 页面与内容结构

页面包含笔记列表、搜索框、标题栏、Markdown 编辑区和实时预览区。

## 代码实现

React 和 TypeScript 负责界面与状态；react-markdown 解析内容；react-syntax-highlighter 支持 JavaScript、Python、Java 等代码高亮；LocalStorage 自动保存。

## 关键实现过程

支持新建、切换、删除和标题搜索；输入内容立即预览；Tab 插入空格；Ctrl+B 或 Command+B 快速加粗。

## 本地运行

执行 `pnpm install` 和 `pnpm run dev`，浏览器访问本地地址。

## 公网部署

已发布到 GitHub Pages：https://neptunehu.github.io/markdown-notes/
