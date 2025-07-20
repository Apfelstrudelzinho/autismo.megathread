import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Megathread Neurodivergente",
  description: "Bem-vindo à Megathread para Neurodivergentes",
  base: '/',
  srcDir: '.',
  themeConfig: {
    nav: [
      { text: 'Guias', link: '' },
      { text: 'CIPTEA', link: '' },
      { text: 'Sobre', link: ''}
    ],

// ...
sidebar: [
  {
    text: "🧠 Navegando no Universo ND",
    collapsible: true,
    items: [
      { text: "🌟 Entendendo a Neurodiversidade", link: "" },
      { text: "💖 Bem-Estar e Autocuidado", link: "" },
      { text: "🤝 Comunidade e Conexão", link: "" },
      { text: "🛠️ Ferramentas e Adaptações", link: "" },
      { text: "📚 Educação e Aprendizagem", link: "" },
      { text: "⚖️ Direitos e Advocacia", link: "" },
      { text: "📞 Diagnóstico e Profissionais", link: "" },
    ],
  },
  {
    text: "⚠️ Desmistificando e Protegendo",
    collapsible: true,
    items: [
      { text: "❌ Mitos e Desinformação", link: "" },
      { text: "🔒 Privacidade Online", link: "" },
      { text: "❓ Perguntas Frequentes (FAQ)", link: "" },
    ],
  },
  {
    text: "🌐 Outros Horizontes (Links Úteis)",
    collapsible: true,
    items: [
      { text: "🔗 Iniciativas e Portais", link: "" },
      { text: "📝 Glossário Neurodivergente", link: "" },
      { text: "ℹ️ Sobre a Megathread", link: "" },
    ],
  },
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
