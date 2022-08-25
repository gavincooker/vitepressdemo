
## vitepress项目心得：
```
1. 通过vitepress提供的初始化hook，全局注册Demo组件、自定义组件
2. 执行vite.config.js，访问到md时，使用文件名作为id检索example文件夹下id路径下的vue文件，并通过script标签存到demos变量`。（此时修改了md源文件并未做解析）
3. 执行vitepress config.js，通过提供的markdown hook，使用markdown-it解析md。（此时对md做了解析并最终修改了源文件）
解析过程： 当md存在demo容器变量名时，检查渲染tokens，将demo容器块内部的text提取为source file path，通过fs访问example文件夹下对应路径下源文件，字符串存至source变量
4. 在md渲染时机，注入字符串，内容为`Demo组件注入source和变量demos`
```
## vitepress源码心得:
### dev环境
```
vitepress是在vite基础搭建的，在vite plugin基础上添加vitepress plugin.
1. 读取vitepress userconfig、sitedata等config配置项，使用vite提供的dev-server创建http server，并挂载vitepress plugin
2. vitepress plugin内处理md类型文件，配置server提供入口html，其中引入client/app/index.js
3. vite提供转换功能，将用户项目文件中涉及到相对路径的url转为/@fs/开头的绝对路径，以期望通过http访问, 最终由http server处理.
4. request handler中，经由vite:resolve plugin transform处理/@fs/路径url，并读取路径下的文件内容<string>
5. 源文件中的引用经由vite:import-analysis plugin transform, 过程中对路径加/@fs/
```

## github page部署心得：
### 创建github同名仓库[repo]
形如`[name]/github.io`。 name为github username，每个账户仅有一个，用作github page个人域名。
该仓库文件可通过`[name]/github.io/`url访问, 一般不存放。转为为每个仓库做部署.
### 每一个仓库拥有在线访问地址
访问`[name]/github.io/账户下的仓库名`
### repo->setting为仓库设置访问分支
deploy branch设置提供server的branch，存放构建完的dist目录文件
### vitepress中正式环境设置baseurl为仓库名
否则`[name]/github.io/账户下的仓库名`只访问到index html, 访问不到包括样式等静态资源。
### 自动部署
通过官方提供的github workflow脚本实现, 提交更改后执行部署。