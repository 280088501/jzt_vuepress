module.exports = {
    title: '金字塔学院',
    description: '致力于推动金融量化蓬勃发展',
    base:'/docs/',
    dest: './dist',
    port: '444',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    markdown: {
        lineNumbers: true,
      },
    themeConfig: {
        logo: '/logo.png',
        //displayAllHeaders: true, // 默认值：false
        activeHeaderLinks: true, // 默认值：true
        //collapsable: true,
        
        //导航栏配置在nav.js中，对导航修改时，仅需要修改nav.js即可
        nav:require("./nav.js"),
        //侧边栏目录配置sidebar.js,它的作用只是分发调用，具体的侧边栏属性配置sidebar.js，都在其具体的文件目录内。
        sidebar:require("./sidebar.js"),
        //sidebar: 'auto',
        //sidebarDepth: 2,
        
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
              transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).fromNow()
              }
            }
          ],
          ['@vuepress/active-header-links'],
          //进度条
          ['@vuepress/nprogress'],
          //搜索配置
          ['@vuepress/search', {
            searchMaxSuggestions: 10
          }],
          //底部回顶
          ['@vuepress/back-to-top'],
          //数学公式表达
          ['vuepress-plugin-latex'],
          //标签页
          ['vuepress-plugin-element-tabs'],
          //流程图
          ['flowchart'],

         // ['vuepress-plugin-mathjax'],

        //['vuepress-plugin-code-copy', {successText: "复制成功"}],
        //代码复制插件
        ['vuepress-plugin-copy-code',{
            copyMessage: '复制成功.',
        }],
        //图片放大插件
        ['@vuepress/medium-zoom'],
        [ 'mermaidjs', { gantt: { barHeight: 50 }}],

    ],

      
}
