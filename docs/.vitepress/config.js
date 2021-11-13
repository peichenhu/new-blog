module.exports = {
    base: '/new-blog/',
    // 网站标题
    title: '加里敦',
    // 网站描述
    description: '一个国产前端人最后的坚持✊',
    // 主题设置（导航栏/侧边栏）
    themeConfig: {
        // 导航烂
        nav: [
            {
                text: '首页',
                link: '/',
                activeMatch: '^/$|^/home/',
            },
            {
                text: '指南',
                link: '/guide',
                activeMatch: '^/guide/',
            },
            {
                text: '仓库',
                link: 'https://github.com/vuejs/vitepress/releases',
            },
        ],
        // 侧边栏: [ array, object ]
        sidebar: [
            {
                // 一级页面
                text: '一级页面',
                link: '/index.html', // 可以缩写 '/test'
            },
            {
                // 一级页面
                text: '一级页面：嵌入式 Vue 组件',
                link: '/vue/index.html', // 可以缩写 '/test'
            },
            {
                // 一级目录
                text: '一级目录',
                children: [
                    {
                        // 二级页面
                        text: '二级页面',
                        link: '/guide/index.html', // 可以缩写 '/guide/'
                    },
                ],
            },
        ],
    },
};
