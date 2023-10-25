export default defineAppConfig({
  docus: {
    title: 'Zono',
    description: 'You Say We Do.',
    image: './public/favicon.png',
    socials: {
      twitter: 'Zono_Hub',
      github: 'Zono-Bot',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
