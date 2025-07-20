import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Megathread Neurodivergente",
  description: "Bem-vindo à Megathread para Neurodivergentes",
  base: '/',
  srcDir: '.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Exemplos', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guia',
        items: [
          { text: 'Explorar', link: '/inicio' },
          { text: 'Exemplos de API', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Apfelstrudelzinho/autismo.megathread' }
    ],

    footer: {
      message: 'Distribuído sob a Licença MIT.',
      copyright: 'Copyright © 2024-presente Apfelstrudelzinho'
    }
  }
})
