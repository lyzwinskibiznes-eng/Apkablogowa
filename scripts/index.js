import { categories } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTopicGrid();
  initializeSearch();
});

function renderTopicGrid() {
  const topicGrid = document.querySelector('[data-topic-grid]');

  if (!topicGrid) {
    return;
  }

  const iconLibrary = {
    '1. Podstawy EX i ATEX':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    '2. Prawo i Certyfikacja':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m10 13-2 2 2 2"></path><path d="m14 17 2-2-2-2"></path></svg>',
    '3. Dowodzenie Iskrobezpieczeństwa (Ex i)':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="8" x2="12" y2="16"></line></svg>',
    '4. Urządzenia, Bariery, Technologie':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12.2619L3.5 11.2333V12.7667L2 13.7381V12.2619Z"></path><path d="M5 10.2333L6.5 9.2333V14.7667L5 15.7667V10.2333Z"></path><path d="M8 8.2333L9.5 7.2333V16.7667L8 17.7667V8.2333Z"></path><path d="M11 6.2333L12.5 5.2333V18.7667L11 19.7667V6.2333Z"></path><path d="M14 8.2333L15.5 7.2333V16.7667L14 17.7667V8.2333Z"></path><path d="M17 10.2333L18.5 9.2333V14.7667L17 15.7667V10.2333Z"></path><path d="M20 12.2619L21.5 11.2333V12.7667L20 13.7381V12.2619Z"></path></svg>',
    '5. Inspekcje i Utrzymanie Ruchu':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
    '6. Praktyka i Case Studies':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="M12 8h.01"></path></svg>',
    '7. Nowe Technologie i Trendy':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
    '8. Branże i Zastosowania':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    '9. Edukacja i Poradniki':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
    '10. Materiały do Pobrania':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
  };

  categories.forEach((category) => {
    const card = document.createElement('article');
    card.className = 'topic-card';

    const header = document.createElement('div');
    header.className = 'topic-header';

    const icon = document.createElement('span');
    icon.className = 'topic-icon';
    icon.innerHTML = iconLibrary[category.title] ?? '';

    const heading = document.createElement('h2');
    heading.textContent = category.title;

    header.append(icon, heading);

    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = category.description;

    const list = document.createElement('ul');
    category.posts.forEach((post) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = `post.html?slug=${encodeURIComponent(post.slug)}`;
      link.textContent = post.title;
      link.setAttribute('data-summary', post.summary);
      link.setAttribute('data-read-time', post.readTime);
      link.title = `${post.summary} (czas czytania: ${post.readTime})`;

      link.addEventListener('mouseenter', handleTooltip);
      link.addEventListener('focus', handleTooltip);

      listItem.append(link);
      list.append(listItem);
    });

    card.append(header, description, list);
    topicGrid.append(card);
  });

  setupTooltips();
}

function initializeSearch() {
  const searchForm = document.querySelector('[data-search-form]');
  const searchInput = document.querySelector('[data-search-input]');
  const categoryFilter = document.querySelector('[data-category-filter]');
  const resultsContainer = document.querySelector('[data-search-results]');
  const resultsCount = document.querySelector('[data-results-count]');
  const emptyState = document.querySelector('[data-empty-state]');
  const clearButton = document.querySelector('[data-clear-search]');

  if (
    !searchForm ||
    !searchInput ||
    !categoryFilter ||
    !resultsContainer ||
    !resultsCount ||
    !emptyState
  ) {
    return;
  }

  populateCategoryFilter(categoryFilter);

  const postsIndex = buildPostIndex();

  const updateResults = () => {
    const selectedCategory = categoryFilter.value;
    const searchTerm = searchInput.value.trim();
    const normalizedTerm = normalizeText(searchTerm);

    const filtered = postsIndex.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.categoryId === selectedCategory;
      const matchesSearch =
        normalizedTerm.length === 0 ||
        normalizeText(`${post.title} ${post.summary}`).includes(normalizedTerm);

      return matchesCategory && matchesSearch;
    });

    renderPostList(resultsContainer, filtered);
    updateResultCount(resultsCount, filtered.length, {
      categoryValue: selectedCategory,
      searchTerm,
    });
    toggleEmptyState(emptyState, filtered.length === 0);
    toggleClearButton(clearButton, searchTerm.length > 0 || selectedCategory !== 'all');
  };

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    updateResults();
  });

  searchInput.addEventListener('input', updateResults);
  categoryFilter.addEventListener('change', updateResults);

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      searchInput.value = '';
      categoryFilter.value = 'all';
      updateResults();
      searchInput.focus();
    });
  }

  updateResults();
}

function populateCategoryFilter(select) {
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.title;
    select.append(option);
  });
}

function buildPostIndex() {
  return categories.flatMap((category) =>
    category.posts.map((post) => ({
      ...post,
      categoryId: category.id,
      categoryTitle: category.title,
    })),
  );
}

function renderPostList(container, posts) {
  container.innerHTML = '';

  posts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.setAttribute('role', 'listitem');

    const meta = document.createElement('div');
    meta.className = 'post-card__meta';

    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'post-card__category';
    categoryBadge.textContent = post.categoryTitle;

    const separator = document.createElement('span');
    separator.className = 'post-card__separator';
    separator.setAttribute('aria-hidden', 'true');
    separator.textContent = '•';

    const readTime = document.createElement('span');
    readTime.className = 'post-card__read-time';
    readTime.textContent = post.readTime;

    meta.append(categoryBadge, separator, readTime);

    const title = document.createElement('h3');
    title.className = 'post-card__title';
    title.textContent = post.title;

    const excerpt = document.createElement('p');
    excerpt.className = 'post-card__excerpt';
    excerpt.textContent = post.summary;

    const link = document.createElement('a');
    link.className = 'post-card__link';
    link.href = `post.html?slug=${encodeURIComponent(post.slug)}`;
    link.textContent = 'Czytaj artykuł';

    card.append(meta, title, excerpt, link);
    container.append(card);
  });
}

function updateResultCount(element, count, { categoryValue, searchTerm }) {
  if (!element) return;

  let message = formatCount(count);
  const details = [];

  if (categoryValue && categoryValue !== 'all') {
    const selectedCategory = categories.find((category) => category.id === categoryValue);
    if (selectedCategory) {
      details.push(`w kategorii „${selectedCategory.title}”`);
    }
  }

  if (searchTerm) {
    details.push(`dla frazy „${searchTerm}”`);
  }

  if (details.length > 0) {
    message = `${message} ${details.join(' oraz ')}`;
  }

  element.textContent = message;
}

function toggleEmptyState(element, isEmpty) {
  if (!element) return;
  element.hidden = !isEmpty;
}

function toggleClearButton(button, isActive) {
  if (!button) return;
  button.hidden = !isActive;
}

function normalizeText(value) {
  if (!value) return '';
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function formatCount(value) {
  if (value === 0) {
    return 'Brak artykułów spełniających podane kryteria';
  }
  if (value === 1) {
    return 'Znaleziono 1 artykuł';
  }
  if (value >= 2 && value <= 4) {
    return `Znaleziono ${value} artykuły`;
  }
  return `Znaleziono ${value} artykułów`;
}

function setupTooltips() {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.setAttribute('role', 'status');
  tooltip.style.position = 'fixed';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.padding = '0.75rem 1rem';
  tooltip.style.background = 'rgba(14, 42, 71, 0.92)';
  tooltip.style.color = '#fff';
  tooltip.style.borderRadius = '0.5rem';
  tooltip.style.boxShadow = '0 10px 30px rgba(14, 42, 71, 0.2)';
  tooltip.style.fontSize = '0.85rem';
  tooltip.style.maxWidth = '320px';
  tooltip.style.lineHeight = '1.4';
  tooltip.style.transition = 'opacity 0.2s ease';
  tooltip.style.opacity = '0';
  tooltip.style.zIndex = '200';

  document.body.append(tooltip);

  document.addEventListener('mousemove', (event) => {
    tooltip.style.left = `${event.clientX + 16}px`;
    tooltip.style.top = `${event.clientY + 16}px`;
  });

  document.querySelectorAll('[data-summary]').forEach((link) => {
    link.addEventListener('mouseleave', () => hideTooltip(tooltip));
    link.addEventListener('blur', () => hideTooltip(tooltip));
  });
}

function handleTooltip(event) {
  const tooltip = document.querySelector('.tooltip');
  if (!tooltip) return;

  const { summary, readTime } = event.currentTarget.dataset;
  tooltip.innerHTML = `<strong>${summary}</strong><div style="margin-top:0.25rem;opacity:0.8;">Szacowany czas czytania: ${readTime}</div>`;
  tooltip.style.opacity = '1';
}

function hideTooltip(tooltip) {
  tooltip.style.opacity = '0';
}
