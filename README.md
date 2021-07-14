# `官网项目`yalejian.com
这是一个**规范项目**，多数前端项目可以参考此项目的文件**设计思路**和**规范**

##此文件README.md的规范
这是一个项目说明文件，按照现有的流行程度，采用Markdown格式。

## 使用性能测试工具web vitals
1.需要安装Chrome插件[Web Vitals](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)
2.npm install web-vitals
3.配置reportWebVitals.js
4.初始化页面前调用reportWebVitals()

##项目目录
使用Homebrew [tree](http://mama.indstate.edu/users/ice/tree/tree.1.html) 生成，
命令：`tree -I node_modules --dirsfirst> tree.text`
```
├── public
   ├── favicon.ico
   ├── index.html
   ├── logo192.png
   └── manifest.json
├── src
   ├── mock
      └── server.js
   ├── pages
      ├── layout
         ├── Footer.js
         ├── Header.js
         ├── Main.js
         └── Menu.js
      ├── modules
         ├── AppDownload
            ├── AppDownload.js
            └── appDownload.less
         ├── Chat
            ├── Chat.js
            └── Chat.less
         ├── CloudPlayer
            ├── CloudPlayer.js
            ├── cloudPlayer.less
            └── playerConfig.json
         ├── Desktop
            ├── Desktop.js
            └── desktop.less
         ├── EatToday
            ├── EatToday.js
            └── eatToday.less
         ├── Photo
            ├── Photo.js
            └── photo.less
         └── WeatherApp
             └── WeatherApp.js
      └── HomePage.js
   ├── router
   ├── utils
      ├── Axios.js
      └── qCloudUtils.js
   ├── index.js
   ├── index.less
   └── reportWebVitals.js
├── LICENSE
├── README.md
├── config-overrides.js
└── package.json
```