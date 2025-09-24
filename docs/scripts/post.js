import { categories, findPostBySlug } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderArticle();
  setCurrentYear();
});

function initNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('nav-links--open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('nav-links--open');
    });
  });
}

function renderArticle() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const categoryParam = params.get('category');

  const article = document.querySelector('[data-article]');
  const articleTitle = document.querySelector('#article-title');
  const articleMeta = document.querySelector('[data-article-meta]');
  const contentContainer = document.querySelector('[data-article-content]');
  const heroHeading = document.querySelector('[data-hero-heading]');
  const heroLead = document.querySelector('[data-hero-lead]');
  const badge = document.querySelector('[data-category-pill]');
  const backLink = document.querySelector('[data-breadcrumb-category]');
  const backToCategoryButton = document.querySelector('[data-back-to-category]');

  if (!article || !articleMeta || !contentContainer || !heroHeading) {
    return;
  }

  if (!slug) {
    renderError('Nie znaleziono artykułu. Wróć do listy sekcji, aby wybrać temat.');
    return;
  }

  const post = findPostBySlug(slug);

  if (!post) {
    renderError('Ups! Wpis, którego szukasz, nie istnieje lub został przeniesiony.');
    return;
  }

  const category = categories.find((item) => item.title === post.category);
  const isValidParam = categoryParam && categories.some((item) => item.id === categoryParam);
  const categoryId = isValidParam ? categoryParam : category ? category.id : undefined;

  heroHeading.textContent = post.title;
  if (heroLead) {
    heroLead.textContent = post.summary;
  }
  if (articleTitle) {
    articleTitle.textContent = post.title;
  }
  if (badge && post.category) {
    badge.textContent = post.category;
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

  if (categoryId && backLink && backToCategoryButton) {
    const url = `category.html?category=${encodeURIComponent(categoryId)}`;
    backLink.href = url;
    backToCategoryButton.href = url;
  }

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
      case 'quote': {
        const figure = document.createElement('blockquote');
        figure.textContent = block.text;
        contentContainer.append(figure);
        break;
      }
      case 'heading': {
        const level = Math.min(Math.max(block.level || 2, 2), 4);
        const headingElement = document.createElement(`h${level}`);
        headingElement.textContent = block.text;
        contentContainer.append(headingElement);
        break;
      }
      default:
        break;
    }
  });
}

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

function setCurrentYear() {
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}
