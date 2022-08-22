vitepress项目心得：
1. 通过vitepress提供的初始化hook，全局注册Demo组件、自定义组件
2. 执行vite.config.js，访问到md时，使用文件名作为id检索example文件夹下id路径下的vue文件，并通过script标签存到demos变量`。（此时修改了md源文件并未做解析）
3. 执行vitepress config.js，通过提供的markdown hook，使用markdown-it解析md。（此时对md做了解析并最终修改了源文件）
解析过程： 当md存在demo容器变量名时，检查渲染tokens，将demo容器块内部的text提取为source file path，通过fs访问example文件夹下对应路径下源文件，字符串存至source变量
4. 在md渲染时机，注入字符串，内容为`Demo组件注入source和变量demos`