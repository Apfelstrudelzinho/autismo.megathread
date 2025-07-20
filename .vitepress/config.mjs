import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Megathread Neurodivergente",
  description: "Bem-vindo à Megathread para Neurodivergentes",
  base: '/', // CORRETO para autismo.space ou neurodivergente.space
  srcDir: '.', // MUITO IMPORTANTE: Mude para '.' (ponto)
               // porque .vitepress está DENTRO da pasta docs/ e o conteúdo está junto
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Exemplos', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guia',
        items: [
          { text: 'Explorar', link: '/menu' },
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
