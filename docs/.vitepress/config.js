module.exports = {
    base: '/new-blog/',
    // 网站标题
    title: 'Hello VitePress',
    // 网站描述
    description: 'Just playing around.',
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
        // 侧边栏
        sidebar: [
            {
                // 目录
                text: '一级目录页面',
                link: '/test.html', // 可以缩写 '/test'
            },
            {
                // 目录
                text: '一级目录：嵌入式 Vue 组件',
                link: '/vue/index.html', // 可以缩写 '/test'
            },
            {
                // 目录组
                text: '一级目录',
                children: [
                    {
                        // 目录
                        text: '二级目录页面',
                        link: '/guide/index.html', // 可以缩写 '/guide/'
                    },
                ],
            },
        ],
    },
};
