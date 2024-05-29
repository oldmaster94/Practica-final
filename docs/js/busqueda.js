document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');

  const items = [

    { name: 'Call of Duty 1', link: '/cod-1/' },
    { name: 'Call of Duty 2', link: '/cod-2/' },
    { name: 'Call of Duty 3', link: '/cod-3/' },
    { name: 'Call of Duty 4 Modern Warfare', link: '/cod-4/' },
    { name: 'Call of Duty Modern Warfare 2', link: '/mw2/' },
    { name: 'Call of Duty Modern Warfare 3', link: '/mw3/' },
    { name: 'Call of Duty Modern Warfare 2019', link: '/mw4/' },
    { name: 'Call of Duty Advanced Warfare', link: '/cod-aw/' },
    { name: 'Call of Duty Infinite Warfare', link: '/cod-iw/' },
    { name: 'Call of Duty WW2', link: '/ww2' },
    { name: 'Call of Duty World At War', link: '/waw/' },
    { name: 'Call of Duty Ghost', link: '/cod-ghosts/' },
    { name: 'Call of Duty Vanguard', link: '/vanguard/' },
    { name: 'Call of Duty Warzone', link: '/warzone/' },
    { name: 'Call of Duty Blackout', link: '/blackout/' },
    { name: 'Call of Duty Black Ops', link: '/bo1/' },
    { name: 'Call of Duty Black Ops 2', link: '/bo2/' },
    { name: 'Call of Duty Black Ops 3', link: '/bo3/' },
    { name: 'Call of Duty Black Ops 4', link: '/bo4/' },
    { name: 'Call of Duty Black Ops Cold War', link: '/bocw/' },
    // Articulos
  ];

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';

    if (query) {
      const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
      filteredItems.forEach(item => {
        const suggestionItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.name;
        suggestionItem.appendChild(link);
        suggestions.appendChild(suggestionItem);
      });
    }
  });
});