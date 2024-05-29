document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');

  const items = [

    { name: 'Call of Duty 1', link: 'https://oldmaster94.github.io/Practica-final/cod-1/' },
    { name: 'Call of Duty 2', link: 'https://oldmaster94.github.io/Practica-final/cod-2/' },
    { name: 'Call of Duty 3', link: 'https://oldmaster94.github.io/Practica-final/cod-3/' },
    { name: 'Call of Duty 4 Modern Warfare', link: 'https://oldmaster94.github.io/Practica-final/cod-4/' },
    { name: 'Call of Duty Modern Warfare 2', link: 'https://oldmaster94.github.io/Practica-final/mw2/' },
    { name: 'Call of Duty Modern Warfare 3', link: 'https://oldmaster94.github.io/Practica-final/mw3/' },
    { name: 'Call of Duty Modern Warfare 2019', link: 'https://oldmaster94.github.io/Practica-final/mw4/' },
    { name: 'Call of Duty Advanced Warfare', link: 'https://oldmaster94.github.io/Practica-final/cod-aw/' },
    { name: 'Call of Duty Infinite Warfare', link: 'https://oldmaster94.github.io/Practica-final/cod-iw/' },
    { name: 'Call of Duty WW2', link: 'https://oldmaster94.github.io/Practica-final/ww2' },
    { name: 'Call of Duty World At War', link: 'https://oldmaster94.github.io/Practica-final/waw/' },
    { name: 'Call of Duty Ghost', link: 'https://oldmaster94.github.io/Practica-final/cod-ghosts/' },
    { name: 'Call of Duty Vanguard', link: 'https://oldmaster94.github.io/Practica-final/vanguard/' },
    { name: 'Call of Duty Warzone', link: 'https://oldmaster94.github.io/Practica-final/warzone/' },
    { name: 'Call of Duty Blackout', link: 'https://oldmaster94.github.io/Practica-final/blackout/' },
    { name: 'Call of Duty Black Ops', link: 'https://oldmaster94.github.io/Practica-final/bo1/' },
    { name: 'Call of Duty Black Ops 2', link: 'https://oldmaster94.github.io/Practica-final/bo2/' },
    { name: 'Call of Duty Black Ops 3', link: 'https://oldmaster94.github.io/Practica-final/bo3/' },
    { name: 'Call of Duty Black Ops 4', link: 'https://oldmaster94.github.io/Practica-final/bo4/' },
    { name: 'Call of Duty Black Ops Cold War', link: 'https://oldmaster94.github.io/Practica-final/bocw/' },
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