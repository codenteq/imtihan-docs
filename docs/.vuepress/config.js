module.exports = {
    base: '/imtihan-docs/',
    title: 'İmtihan Documentation',
    description: 'The official documentation for İmtihan',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "https://codenteq.com/wp-content/uploads/2022/11/cropped-favicon-270x270.webp"}],
    ],
    plugins: [['vuepress-plugin-code-copy', true]

    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'API', link: '/api/' },
            { text: 'Homepage', link: 'https://codenteq.com' },
            { text: 'License', link: 'https://github.com/codenteq/imtihan/blob/master/LICENSE' },
            { text: 'GitHub', link: 'https://github.com/codenteq/imtihan' },
        ],
        sidebar: [
            '/introduction/',
            '/requirements/',
            '/installation/',
            '/upgrade/',
            '/docker/',
            '/database/',
            '/packages/',
            '/advanced-topics/',
            '/testing/',
            '/api/'
        ],
        docsRepo: 'codenteq/imtihan-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',
        logo: 'https://codenteq.com/wp-content/uploads/2022/11/cropped-favicon-270x270.webp',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}
