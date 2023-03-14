const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
    basePath: '/imtihan-docs',
    output: 'docs',
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US',
    }
})
