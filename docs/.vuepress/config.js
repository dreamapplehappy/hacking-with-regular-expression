module.exports = {
    title: '1234',
    description: 'Just playing around',
    themeConfig: {
        displayAllHeaders: true,
        logo: '/assets/img/logo.png',
        nav: [
            { text: '常用的正则', link: '/common-regex-examples/' },
            { text: '关于', link: '/about/' },
        ],
        sidebar: [
            ['/common-regex-examples/', '常用的正则表达式'],
            ['/learn-step-by-step/', '学习资料'],
        ],
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
    },
}
