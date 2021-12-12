module.exports = {
    base: "/new-blog/",
    // 网站标题
    title: "加里敦",
    // 网站描述
    description: "一个国产前端人最后的坚持✊",
    // 主题设置（导航栏/侧边栏）
    themeConfig: {
        // sidebarDepth: 0,
        // 导航烂
        nav: [
            {
                text: "首页",
                link: "/",
                activeMatch: "^/$|^/home/"
            },
            {
                text: "关于我",
                link: "/article/Other/个人简历"
            },
            {
                text: "仓库",
                link: "https://github.com/peichenhu"
            }
        ],
        // 侧边栏: [ array, object ]
        sidebar: [
            {
                text: "HTML",
                children: ["布局", "画布", "链接", "视频", "音频"].map((text) => ({
                    text,
                    link: `/article/HTML/${text}.html`
                }))
            },
            {
                text: "JS",
                children: ["变量声明", "数据类型", "深入对象", "深入数组", '深入函数'].map((text) => ({
                    text,
                    link: `/article/JS/${text}.html`
                }))
            }

            // {
            //     // 一级页面
            //     text: '一级页面',
            //     link: '/index.html', // 可以缩写 '/test'
            // },
            // {
            //     // 一级页面
            //     text: '一级页面：嵌入式 Vue 组件',
            //     link: '/vue/index.html', // 可以缩写 '/test'
            // },
            // {
            //     // 一级目录
            //     text: '一级目录',
            //     children: [
            //         {
            //             // 二级页面
            //             text: '二级页面',
            //             link: '/guide/index.html', // 可以缩写 '/guide/'
            //         },
            //     ],
            // },
        ]
    }
};
