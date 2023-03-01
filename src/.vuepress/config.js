module.exports = {
    base: '/imtihan-docs/',
    title: 'İmtihan Documentation',
    description: 'The official documentation for İmtihan',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "https://codenteq.com/wp-content/uploads/2022/11/cropped-favicon-270x270.webp"}],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'API', link: '/api/' },
            { text: 'GitHub', link: 'https://github.com/codenteq/imtihan' },
        ],
        docsRepo: 'codenteq/imtihan-docs',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',
        logo: 'https://codenteq.com/wp-content/uploads/2022/11/cropped-favicon-270x270.webp',
        sidebar: [
            '/introduction/',
            '/requirements/',
            '/installation/',
            '/docker/',
            '/database/',
            '/packages/',
            '/advanced-topics/',
            '/testing/',
            '/api/'
        ],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}
