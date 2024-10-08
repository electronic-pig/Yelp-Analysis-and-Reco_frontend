<div align="center">
    <p align="center">
        <img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/c430bbf2-fa74-4235-b078-0f4b7b571353" alt="logo" width="500" />
    </p>
    
![GitHub License](https://img.shields.io/github/license/electronic-pig/Yelp-Analysis-and-Reco_frontend)
![GitHub Release](https://img.shields.io/github/v/release/electronic-pig/Yelp-Analysis-and-Reco_frontend)
![Static Badge](https://img.shields.io/badge/collaborator-4-lightblue)
![node.js version](https://img.shields.io/badge/nodejs-18+-orange.svg)
![GitHub Repo stars](https://img.shields.io/github/stars/electronic-pig/Yelp-Analysis-and-Reco_frontend)

<h2 align="center">Yelp-Analysis-and-Reco</h2>
</div>

# ✨ 简介

这是yelp点评数据分析与推荐项目的前端仓库，是集成了大数据分析及可视化，以及大数据应用开发的WebApp应用.

后端仓库请移步[Yelp-Analysis-and-Reco](https://github.com/Labhahaha/Yelp-Analysis-and-Reco).

# 🎉 特性

## 数据可视化

- 商户分析
- 用户分析
- 评论分析
- 评分分析
- 打卡分析

## 应用功能

- 用户端点评推荐
- 用户端商户搜索
- 用户端好友推荐
- 商家端经营推荐
- 评论情感分析

> [!Warning]
> 本项目使用的图标及首页图片等均来自[yelp官方网站](https://www.yelp.com/)，开源项目仅作学习交流之用，请遵守相关版权规定

# 🛠 技术栈

- vite + vue3(选项式API)
- Element Plus
- Apache Echarts

<a title="vue" href="https://cn.vuejs.org/" target="_blank">
    <img height="64px" src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/5d6e1a71-1ac2-4043-866b-17ae33afadfd"/>
</a>
<a title="element-plus" href="https://element-plus.org/zh-CN/" target="_blank">
    <img height="64px" src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/795c9710-e667-49b8-8514-2cc6663b3f8c"/>
</a>
<a title="echarts" href="https://echarts.apache.org/zh/index.html" target="_blank">
    <img height="64px" src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/0106ecb9-df25-4f3c-a27e-d763a75b14af"/>
</a>


# 🚀 运行

在执行后续步骤之前，请确保您配置好了以下环境：

- nodejs ≥ 18.19.1

然后在项目根目录执行以下步骤：

### 安装依赖
```sh
npm install
```

### 编译运行
- 在`main.js`中填写你的BaiduMap_api_key
- 在`.env.development`中填写你的后端服务地址
```sh
npm run dev
```

### 打包部署(可选)
- 在`.env.production`中填写你的后端服务地址
```sh
npm run build
```
> [!NOTE]
> 若项目的前后端运行在同一局域网下的不同设备上，请务必关闭设备的防火墙

# 📸 运行截图
> 项目首页

![首页](https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/28c9ad69-ae7c-49ce-b4da-c761a6a77218)

> [!NOTE]
> 用户端唯一指定用户名`Shari`，密码任意；商家端唯一指定用户名`asdf`，密码任意

> 数据可视化

<table>
    <tr>
        <td align="center">商户分析</td>
        <td align="center">用户分析</td>
        <td align="center">评论分析</td>
        <td align="center">评分分析</td>
        <td align="center">打卡分析</td>
    </tr>
    <tr>
        <td><img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/1def87ac-3fcd-4da2-8710-01336098e87b"></td>
        <td><img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/65b6ff85-fdcc-444c-8b73-7eb62a38381d"></td>
        <td><img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/611e2552-f661-4926-8c3c-3d180b556a13"></td>
        <td><img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/b2748536-b8dc-4b3a-945d-95db0632b730"></td>
        <td><img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/a0fed411-1d6d-4fcc-8239-4e12cf69aecb"></td>
    </tr>
</table>

> 商户详情&评论情感分析

![商家详情](https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/fe525a1c-5c69-4962-9dd3-9f3e617791c4)

> 用户端推荐

<table>
    <tr>
        <td align="center">商户推荐</td>
        <td align="center">好友推荐</td>
    </tr>
    <tr>
        <td><img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/629e1db3-7b61-4c5d-bd63-ce429684f6dc"></td>
        <td><img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/ad97e875-6336-43f5-8c35-538ffe74e29f"></td>
    </tr>
</table>

> [!Important]
> 由于yelp官方开源[数据集](https://www.yelp.com/dataset)中商户数据与图片数据并不完全对应，因此商户卡片的图片为随机选取

> 搜索与筛选

![搜索与筛选](https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/d86b9dea-8633-4579-bb84-ed11bfb17e4b)

> 商家端

<table>
    <tr>
        <td align="center">商户仪表板</td>
        <td align="center">经营建议</td>
    </tr>
    <tr>
        <td><img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/c608bfcc-0490-471b-af61-0688d2ae8ba3"></td>
        <td><img src="https://github.com/electronic-pig/Yelp-Analysis-and-Reco_frontend/assets/103497254/6b3ece34-3561-43a4-be17-5cd56cc2b8b2"></td>
    </tr>
</table>

# 🤝 团队成员
本项目由以下四位开发者共同完成(不分先后)：[electronic-pig](https://github.com/electronic-pig)、[Labhahaha](https://github.com/Labhahaha)、[zf666fz](https://github.com/zf666fz)、[weeadd](https://github.com/weeadd)

# ✍ 写在最后
项目制作不易，如果它对你有帮助的话，请务必给作者点一个免费的⭐，万分感谢!🙏🙏🙏
