module.exports = {
  title: 'Soma Ali - UX/UI Designer',
  description: 'Portfolio showcasing UX/UI design projects',
  base: '/',
  head: [
    ['meta', { name: 'theme-color', content: '#8b5cf6' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Resume', link: '/resume/' }
    ],
    sidebar: 'auto',
    smoothScroll: true
  }
}