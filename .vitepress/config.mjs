import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Megathread Neurodivergente",
  description: "Bem-vindo à Megathread para Neurodivergentes",
  base: '/',
  srcDir: '.', // <--- MUITO IMPORTANTE: DEVE SER '.' (ponto)
               //      porque seus arquivos .md estão na raiz do projeto
               //      e .vitepress também está na raiz
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Exemplos', link: '/markdown-examples' } // Se você ainda tiver o markdown-examples.md
    ],

    sidebar: [
      {
        text: 'Guia',
        items: [
          { text: 'Explorar', link: '/inicio' }, // Ajustado para /inicio
          { text: 'Exemplos de API', link: '/api-examples' } // Se você ainda tiver o api-examples.md
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
