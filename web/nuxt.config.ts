// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: `Wise Gals: MEV Script Bots`,
            meta: [
                { name: 'description', content: `An elite squad of MEV Script bots powering on-chain contracts running on Nexa, Bitcoin and Bitcoin Cash.` },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            script: [
                { src: '/js/matomo.js' },
            ],
        },
    },

    /* Progressive Web Application Settings */
    pwa: {
        manifest: {
            name: 'Wise Gals: MEV Script Bots',
            short_name: 'Wise Gals',
            description: `An elite squad of MEV Script bots powering on-chain contracts running on Nexa, Bitcoin and Bitcoin Cash.`,
            lang: 'en',
            theme_color: '#518c96',
            background_color: '#518c96',
            // useWebmanifestExtension: false,
        },
        meta: {
            name: 'Wise Gals: MEV Script Bots',
            description: `An elite squad of MEV Script bots powering on-chain contracts running on Nexa, Bitcoin and Bitcoin Cash.`,
            author: `Nexa contributors`,
        },
        // icon: false, // disables the icon module
        workbox: {
            // workboxURL: 'TBD',
            // enabled: true, // FOR DEV PURPOSES ONLY
        },
    },

    /* Application Modules */
    modules: [
        /* Tailwind CSS */
        '@nuxtjs/tailwindcss',

        /* Pinia */
        '@pinia/nuxt',

        /* Internationalization for Nuxt */
        '@nuxtjs/i18n',

        /* Progressive Web Application */
        // '@kevinmarrec/nuxt-pwa',
    ],

    /* Route Rules */
    routeRules: {
        /* Add CORS headers to root. */
        // NOTE: We need this to make <token>.json available to web apps.
        '/**': { cors: true },
    },

    /* Set compatibility date. */
    compatibilityDate: '2024-08-15',
})
