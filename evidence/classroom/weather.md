# 天气查询应用开发说明

## 项目概述

Aeris 是一款支持城市搜索、定位和收藏的天气查询应用。

## 设计要素

深蓝渐变背景结合半透明天气卡片，重点展示温度、天气状况和五日趋势。

## 页面与内容结构

页面包含城市搜索、定位按钮、当前天气、湿度与风速、五日预报以及收藏城市列表。

## 代码实现

React 与 TypeScript 构建界面；Open-Meteo 提供免密钥天气和地理编码接口；Geolocation API 获取坐标；LocalStorage 保存收藏城市。

## 关键实现过程

支持城市查询、加载动画、找不到城市与网络失败提示、定位查询、收藏、取消收藏和点击收藏再次查询。

## 本地运行

执行 `pnpm install` 和 `pnpm run dev`，浏览器访问本地地址。

## 公网部署

已发布到 GitHub Pages：https://neptunehu.github.io/weather/
