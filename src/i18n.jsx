import React, { createContext, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    siteName: "Artificial Music",
    home: "Home",
    home_title: "Engineering Intelligence for Sound Systems.",
    home_sub: "AI architectures for music, cognition, and human-centered interaction.",
    core_areas_title: "Core Areas",
    core_areas: [
      "Generative Music Systems",
      "Cognitive & Behavioral AI",
      "Mobile AI Applications",
      "Therapeutic Sound Environments",
    ],
    research_driven_title: "Research-Driven AI",
    research_driven_text: "Combining machine learning, computational creativity, and applied engineering to create meaningful sound-based technologies.",
    about: "About",
    about_desc: "Artificial Music explores how AI can enhance emotional regulation, cognitive resilience, and expressive autonomy.",
    products: "Products",
    product_sonifya_title: "Sonifya",
    product_sonifya_desc: "Sonifya uses causal-attention transformer neural networks to treat music as a structured language. Through deep learning models trained on large symbolic music datasets, our AI understands harmonic and rhythmic context to offer intelligent co-composition and real-time structural analysis.",
    product_pulsegarden_title: "Pulse Garden",
    product_pulsegarden_desc: "A bio-inspired generative sound ecosystem evolving in real time for emotional regulation and stress modulation.",
    research: "Research",
    research_intro: "Focused on neural networks for music generation, self-supervised learning, computational creativity, and AI-driven sound systems.",
    dissertation_title: "Dissertation",
    dissertation_desc: "Read the dissertation directly in the browser or download the PDF to read it at your convenience.",
    dissertation_open: "Open PDF",
    dissertation_download: "Download PDF",
    tech_stack_title: "Technology Stack",
    tech_stack: [
      "Python — Machine Learning",
      "Kotlin — Android Development",
      "Java — Backend Systems",
      "Deep Learning & Generative Models",
    ],
    future: "Future",
    future_items: [
      "AI for domestic violence audio support systems",
      "Cognitive stimulation tools for Alzheimer’s care",
      "Adaptive AI musical instruments for mobile platforms",
      "Emotion-aware generative composition engines",
    ],
    contact: "Contact",
    contact_operates: "Artificial Music operates remotely.",
    contact_email: "Email: contact@artificialmusic.ai",
    who: "About Lucas",
    who_p1:
      "I’m Lucas Abrão — an AI researcher and software engineer specializing in generative models for music. My work bridges neural architectures, music theory, and interactive design to build audio systems that adapt to listener context and emotion.",
    who_p2:
      "I implement and deploy machine-learning pipelines for web and mobile applications with an emphasis on robustness, user experience and reproducible evaluation. I collaborate with musicians and multidisciplinary teams to translate research into sound-driven products and tools.",
    see_profile: "See my profile and projects",
    follow: "Follow",
    intelligence_tag: "Intelligence for Sound.",
    newsletter_title: "Newsletter on AI for Music and Audio",
    newsletter_desc: "Receive the latest news on audio analysis, music composition, and other AI applications in the world of music. Free and directly to your email.",
    newsletter_placeholder: "Your email",
    newsletter_button: "Subscribe",
    newsletter_success: "Thank you for subscribing!",
  },
  pt: {
    siteName: "Artificial Music",
    home: "Início",
    home_title: "Engenharia de Inteligência para Sistemas Sonoros.",
    home_sub: "Arquiteturas de IA para música, cognição e interação centrada no humano.",
    core_areas_title: "Áreas Principais",
    core_areas: [
      "Sistemas Musicais Generativos",
      "IA Cognitiva e Comportamental",
      "Aplicações Móveis de IA",
      "Ambientes Sonoros Terapêuticos",
    ],
    research_driven_title: "IA Orientada por Pesquisa",
    research_driven_text: "Combinando aprendizado de máquina, criatividade computacional e engenharia aplicada para criar tecnologias sonoras significativas.",
    about: "Sobre",
    products: "Produtos",
    product_sonifya_title: "Sonifya",
    product_sonifya_desc: "Companheiro sonoro com IA que integra rotinas de medicação, estados emocionais e feedback sonoro adaptativo.",
    product_pulsegarden_title: "Pulse Garden",
    product_pulsegarden_desc: "Ecossistema sonoro generativo bio-inspirado que evolui em tempo real para regulação emocional e modulação de estresse.",
    research: "Pesquisa",
    research_intro: "Focado em redes neurais para geração musical, aprendizado auto-supervisionado, criatividade computacional e sistemas sonoros dirigidos por IA.",
    dissertation_title: "Dissertação",
    dissertation_desc: "Leia a dissertação diretamente no navegador ou baixe o PDF para ler quando quiser.",
    dissertation_open: "Abrir PDF",
    dissertation_download: "Baixar PDF",
    tech_stack_title: "Stack Tecnológico",
    tech_stack: [
      "Python — Machine Learning",
      "Kotlin — Desenvolvimento Android",
      "Java — Sistemas Backend",
      "Aprendizado Profundo e Modelos Generativos",
    ],
    future: "Futuro",
    future_items: [
      "IA para sistemas de apoio acústico em violência doméstica",
      "Ferramentas de estimulação cognitiva para cuidados de Alzheimer",
      "Instrumentos musicais adaptativos com IA para plataformas móveis",
      "Motores de composição generativa sensíveis à emoção",
    ],
    contact: "Contato",
    contact_operates: "Artificial Music opera remotamente.",
    contact_email: "Email: contact@artificialmusic.ai",
    who: "Sobre Lucas",
    who_p1:
      "Sou Lucas Abrão — pesquisador em inteligência artificial e engenheiro de software especializado em modelos generativos para música. Meu trabalho integra arquiteturas neurais, teoria musical e design interativo para construir sistemas de áudio que se adaptam ao contexto e à emoção dos ouvintes.",
    who_p2:
      "Implemento e deployo pipelines de aprendizado de máquina para aplicações web e mobile, com foco em robustez, experiência do usuário e avaliação reprodutível. Colaboro com músicos e equipes multidisciplinares para transformar pesquisa em produtos sonoros.",
    see_profile: "Veja meu perfil e projetos",
    follow: "Siga",
    intelligence_tag: "Inteligência para o Som.",
    newsletter_title: "Newsletter sobre IA para Música e Áudio",
    newsletter_desc: "Receba as últimas novidades sobre análise de áudio, composição musical e outras aplicações de IA no mundo da música. Gratuito e diretamente no seu email.",
    newsletter_placeholder: "Seu email",
    newsletter_button: "Inscrever-se",
    newsletter_success: "Obrigado por se inscrever!",
  },
  es: {
    siteName: "Artificial Music",
    home: "Inicio",
    home_title: "Inteligencia de Ingeniería para Sistemas Sonoros.",
    home_sub: "Arquitecturas de IA para la música, la cognición y la interacción centrada en el ser humano.",
    core_areas_title: "Áreas Principales",
    core_areas: [
      "Sistemas Generativos de Música",
      "IA Cognitiva y Conductual",
      "Aplicaciones Móviles de IA",
      "Entornos Sonoros Terapéuticos",
    ],
    research_driven_title: "IA Basada en Investigación",
    research_driven_text: "Combinando aprendizaje automático, creatividad computacional e ingeniería aplicada para crear tecnologías sonoras significativas.",
    about: "Acerca",
    about_desc: "Artificial Music explora cómo la IA puede mejorar la regulación emocional, la resiliencia cognitiva y la autonomía expresiva.",
    products: "Productos",
    product_sonifya_title: "Sonifya",
    product_sonifya_desc: "Compañero sónico impulsado por IA que integra rutinas de medicación, estados emocionales y retroalimentación sonora adaptativa.",
    product_pulsegarden_title: "Pulse Garden",
    product_pulsegarden_desc: "Un ecosistema sonoro generativo bioinspirado que evoluciona en tiempo real para la regulación emocional y la modulación del estrés.",
    research: "Investigación",
    research_intro: "Enfocado en redes neuronales para generación musical, aprendizaje auto-supervisado, creatividad computacional y sistemas de sonido impulsados por IA.",
    dissertation_title: "Disertación",
    dissertation_desc: "Lee la disertación directamente en el navegador o descarga el PDF para leerla cuando quieras.",
    dissertation_open: "Abrir PDF",
    dissertation_download: "Descargar PDF",
    tech_stack_title: "Stack Tecnológico",
    tech_stack: [
      "Python — Machine Learning",
      "Kotlin — Desarrollo Android",
      "Java — Sistemas Backend",
      "Deep Learning y Modelos Generativos",
    ],
    future: "Futuro",
    future_items: [
      "IA para sistemas de apoyo de audio en violencia doméstica",
      "Herramientas de estimulación cognitiva para el cuidado del Alzheimer",
      "Instrumentos musicales adaptativos con IA para plataformas móviles",
      "Motores de composición generativa sensibles a la emoción",
    ],
    contact: "Contacto",
    contact_operates: "Artificial Music opera de forma remota.",
    contact_email: "Correo: contact@artificialmusic.ai",
    who: "Sobre Lucas",
    who_p1:
      "Soy Lucas Abrão — investigador en IA e ingeniero de software especializado en modelos generativos para música. Mi trabajo combina arquitecturas neuronales, teoría musical y diseño interactivo para construir sistemas de audio que se adaptan al contexto y la emoción del oyente.",
    who_p2:
      "Implemento y despliego pipelines de aprendizaje automático para aplicaciones web y móviles, con énfasis en robustez, experiencia de usuario y evaluación reproducible. Colaboro con músicos y equipos multidisciplinarios para traducir la investigación en productos sonoros.",
    see_profile: "Vea mi perfil y proyectos",
    follow: "Seguir",
    intelligence_tag: "Inteligencia para el Sonido.",
    newsletter_title: "Boletín sobre IA para Música y Audio",
    newsletter_desc: "Recibe las últimas novedades sobre análisis de audio, composición musical y otras aplicaciones de IA en el mundo de la música. Gratuito y directamente en tu correo electrónico.",
    newsletter_placeholder: "Tu correo electrónico",
    newsletter_button: "Suscribirse",
    newsletter_success: "¡Gracias por suscribirte!",
  },
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const stored = localStorage.getItem("am_lang");
      if (stored) return stored;
    } catch (e) {}

    // detect from browser
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    const code = nav.toLowerCase();
    if (code.startsWith("pt")) return "pt";
    if (code.startsWith("es")) return "es";
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("am_lang", lang);
    } catch (e) {}
  }, [lang]);

  const t = (key) => {
    const lookup = translations[lang] || translations.en;
    return lookup[key] || translations.en[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export default translations;
