const links = [
  {
    tag: 'Instagram',
    title: 'Assistir vídeo completo',
    desc: 'Método Amazon Validado.',
    button: 'Assistir agora',
    url: 'https://www.instagram.com/reel/DVcTCp2jkR9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    image: 'banner1.png'
  },
  {
    tag: 'Instagram',
    title: 'Perfil no Instagram',
    desc: 'Entenda como começar do zero no digital.',
    button: 'Ver perfil',
    url: 'https://www.instagram.com/joao_florio/',
    image: 'banner2.png'
  },
  {
    tag: 'YouTube',
    title: 'Como começar no digital',
    desc: 'Veja esse conteúdo e entenda o caminho.',
    button: 'Ver vídeo',
    url: 'https://www.youtube.com/watch?v=zIlV9SIzvPo',
    image: 'banner3.png'
  },
  {
    tag: 'WhatsApp',
    title: 'Falar no WhatsApp',
    desc: 'Entre direto no atendimento.',
    button: 'Chamar agora',
    url: 'https://api.whatsapp.com/send/?phone=5535910019159&text=Oi+jo%C3%A3o%2C+quero+meu+acesso+ao+mini+curso&type=phone_number&app_absent=0&utm_source=ig',
    image: 'banner4.png'
  }
];

const linksGrid = document.getElementById('linksGrid');

if (linksGrid) {
  linksGrid.innerHTML = '';
  const fragment = document.createDocumentFragment();

  links.forEach((item) => {
    const card = document.createElement('a');
    card.className = 'link-card';
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', item.title);

    card.innerHTML = `
      <img 
        class="link-card__image" 
        src="${item.image}" 
        alt="${item.title}" 
        loading="lazy"
        decoding="async"
      >
      <div class="link-card__overlay"></div>

      <div class="link-card__content">
        <span class="link-card__tag">${item.tag}</span>
        <h3 class="link-card__title">${item.title}</h3>
        <p class="link-card__desc">${item.desc}</p>
        <span class="link-card__button">${item.button}</span>
      </div>
    `;

    fragment.appendChild(card);
  });

  linksGrid.appendChild(fragment);
} else {
  console.warn('Elemento #linksGrid não encontrado no HTML.');
}
