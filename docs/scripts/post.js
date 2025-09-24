
  article.setAttribute('aria-labelledby', 'article-title');

  document.title = `${post.title} – ATEXpert`;

  const metaParts = [];
  if (post.category) {
    metaParts.push(post.category);
  }
  if (post.readTime) {
    metaParts.push(`czas czytania: ${post.readTime}`);
  }
  articleMeta.textContent = metaParts.join(' • ');


  contentContainer.innerHTML = '';
  post.content.forEach((block) => {
    switch (block.type) {
      case 'paragraph': {
        const paragraph = document.createElement('p');
        paragraph.textContent = block.text;
        contentContainer.append(paragraph);
        break;
      }
      case 'list': {
        const list = document.createElement(block.ordered ? 'ol' : 'ul');
        block.items.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          list.append(li);
        });
        contentContainer.append(list);
        break;
      }

        break;
      }
      default:
        break;
    }
  });


function renderError(message) {
  const container = document.querySelector('[data-article]');
  const heroHeading = document.querySelector('[data-hero-heading]');
  if (heroHeading) {
    heroHeading.textContent = 'Wpis nie został znaleziony';
  }
  if (!container) return;

  container.innerHTML = `
    <div class="article">
      <h1>Wpis nie został znaleziony</h1>
      <p>${message}</p>
      <a class="back-link" href="index.html">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Wróć do strony głównej
      </a>
    </div>
  `;
}

