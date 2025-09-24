import { findPostBySlug } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const article = document.querySelector('[data-article]');
  const articleTitle = document.querySelector('#article-title');
  const articleMeta = document.querySelector('[data-article-meta]');
  const contentContainer = document.querySelector('[data-article-content]');
  const heroHeading = document.querySelector('[data-hero-heading]');

  if (!article || !articleMeta || !contentContainer) {
    return;
  }

  if (!slug) {
    renderError('Nie znaleziono artykułu. Użyj listy wpisów aby kontynuować.');
    return;
  }

  const post = findPostBySlug(slug);

  if (!post) {
    renderError('Ups! Wpis, którego szukasz, nie istnieje lub został przeniesiony.');
    return;
  }

  heroHeading.textContent = post.title;
  if (articleTitle) {
    articleTitle.textContent = post.title;
  }
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
      default:
        break;
    }
  });
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
