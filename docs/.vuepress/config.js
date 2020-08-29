module.exports = {
    title: '学会正则表达式',
    description: 'Just playing around',
    // theme: '@vuepress/vue',
    themeConfig: {
        displayAllHeaders: true,
        smoothScroll: true,
        logo: '/images/logo.png',
        nav: [
            { text: '正则基础', link: '/elementary-knowledge/' },
            { text: '正则进阶', link: '/learn-step-by-step/' },
            { text: '常用的正则', link: '/common-regex-examples/' },
            { text: '关于', link: '/about/' },
        ],
        sidebar: 'auto',
        // sidebar: [
        //     ['/common-regex-examples/', '常用的正则表达式'],
        //     ['/learn-step-by-step/', '学习资料'],
        // ],
        // sidebar: {
        //     '/common-regex-examples/': [
        //         '',
        //         'a'
        //     ],
        //     '/learn-step-by-step/': [
        //         ''
        //     ],
        //     '/about/': [
        //         ''
        //     ]
        // },
        // github
        repo: 'dreamapplehappy/hacking-with-regular-expression',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    }
}
