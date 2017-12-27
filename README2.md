使用react全家桶

    react
    react-router
        （安装react依赖：npm i react react-dom react-router -S）
        （路由跳转 this.context.router.push('/xx/xx')  需要定义包含router属性的contextTypes）
    redux
    react-redux
    react-router-redux
    redux-saga
    immutale
    reselect
    antd

接口

    json-server：
        npm i json-server -g
        json-server db.json -w -p 3000
        
        本地 npm i json-server -D
        

项目搭建

    roadhog:
        npm i roadhog -g

工作流

    "scripts": {
      "server": "cd server && json-server db.json -w -p 3000",
      "dev": "roadhog server"
    }

    npm run server
    npm run dev

命名方式

    [功能][模块].xx
    React组件，所以使用大驼峰命名法
