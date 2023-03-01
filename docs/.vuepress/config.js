module.exports = {
    base: '/imtihan-src/',
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
        docsRepo: 'codenteq/imtihan-src',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',
        logo: 'https://codenteq.com/wp-content/uploads/2022/11/cropped-favicon-270x270.webp',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}
