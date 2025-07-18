import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Megathread Neurodivergente", // <-- Seu título
  description: "Bem-vindo à Megathread para Neurodivergentes", // <-- Sua descrição
  base: '/autismo.megathread/', // <-- CRUCIAL: Este é o caminho base para o GitHub Pages
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Exemplos', link: '/markdown-examples' } // <-- Ajuste se os nomes dos seus arquivos mudaram
    ],

    sidebar: [
      {
        text: 'Guia',
        items: [
          { text: 'Exemplos de Markdown', link: '/markdown-examples' }, // <-- Ajuste se os nomes dos seus arquivos mudaram
          { text: 'Exemplos de API', link: '/api-examples' } // <-- Ajuste se os nomes dos seus arquivos mudaram
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Apfelstrudelzinho/autismo.megathread' } // <-- Seu link do GitHub
    ],

    footer: {
      message: 'Distribuído sob a Licença MIT.',
      copyright: 'Copyright © 2024-presente Apfelstrudelzinho'
    }
  }
})