# tob-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 打包到测试环境
npm run devbuild

### 组件说明
#### bookdisplay 书名图片作者信息展示,接收一个string类型,wide为默认值,为视频样式,narrow为图书和音频样式
#### catolog 为书库样式,需要传递一个书库名称
#### introducemenu 为阅读视频听书三个页面的简介和目录组件
#### chapterlist 为introducemenu目录点击章节分割显示的选择章节列表
#### nav 为首页banner下面的书库导航栏
#### rowdisplay 为首页中横向排列展示的书籍样式
#### search 搜索框
#### searchlist 搜索列表
#### tabbar底部切换菜单
#### totop回顶部,需要在父元素上设置.overflow-y的类名,切记这个类名是为了特意和