document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  const searchBarTop = document.getElementById('searchBarTop');
  const closeSearch = document.getElementById('closeSearch');
  const searchInput = searchBarTop.querySelector('input');

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Show search bar
  document.querySelectorAll('.search-icon').forEach(icon => {
    icon.addEventListener('click', function(event) {
      event.preventDefault();
      searchBarTop.classList.add('active');
      searchInput.focus();
    });
  });

  // Close search bar with ✖
  if (closeSearch) {
    closeSearch.addEventListener('click', function() {
      searchBarTop.classList.remove('active');
    });
  }

  // Close search if clicking outside
  document.addEventListener('click', function(event) {
    if (
      searchBarTop.classList.contains('active') &&
      !event.target.closest('#searchBarTop') &&
      !event.target.classList.contains('search-icon')
    ) {
      searchBarTop.classList.remove('active');
    }
  });

  // Search action on Enter key
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        const pages = [
          { name: 'home', url: 'home.html' },
          { name: 'publications', url: 'publications.html' },
          { name: 'bio', url: 'bio.html' },
          { name: 'contact', url: 'contact.html' }
        ];
        const result = pages.find(page => page.name.includes(query));
        if (result) {
          window.location.href = result.url;
        } else {
          alert('No matching page found.');
        }
      } else {
        alert('Please enter a search term.');
      }
    }
  });
});
