let categories = [];

document.addEventListener('DOMContentLoaded', () => {
  const data = window.ATEX_DATA || {};
  categories = Array.isArray(data.categories) ? data.categories : [];

  initNavigation();
  renderCategory();
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

function renderCategory() {
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get('category');
  const container = document.querySelector('[data-topic-list]');
  const heading = document.querySelector('[data-category-title]');
  const description = document.querySelector('[data-category-description]');

  if (!container || !heading || !description) return;

  if (!categoryId) {
    renderError(container, 'Nie znaleziono wskazanej kategorii. Wróć do strony głównej, aby wybrać sekcję.');
    return;
  }

  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    renderError(container, 'Wybrana kategoria została przeniesiona lub nie istnieje.');
    return;
  }

  document.title = `${category.title} – ATEXpert`;
  heading.textContent = category.title;
  description.textContent = category.description;

  container.innerHTML = '';

  category.posts.forEach((post) => {
    const article = document.createElement('article');
    article.className = 'topic-item';

    const title = document.createElement('h2');
    const link = document.createElement('a');
    link.href = `post.html?slug=${encodeURIComponent(post.slug)}&category=${encodeURIComponent(category.id)}`;
    link.textContent = post.title;
    title.append(link);

    const meta = document.createElement('p');
    meta.className = 'topic-item__meta';
    if (post.readTime) {
      meta.textContent = `Szacowany czas czytania: ${post.readTime}`;
    }

    const summary = document.createElement('p');
    summary.textContent = post.summary;

    article.append(title, meta, summary);
    container.append(article);
  });
}

function renderError(container, message) {
  const wrapper = document.createElement('div');
  wrapper.className = 'empty-state';
  wrapper.innerHTML = `
    <h2>Ups! Nie ma takiej kategorii</h2>
    <p>${message}</p>
    <a class="secondary" href="index.html">Wróć do strony głównej</a>
  `;

  container.innerHTML = '';
  container.append(wrapper);
}

function setCurrentYear() {
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}
