function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show');
}

document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        window.location.href = 'search_results.html';
    }
});

document.getElementById('searchButton').addEventListener('click', function(){
    window.location.href = 'search_results.html';
});

function toggleExpand(element) {
    element.classList.toggle('expanded');
}

// javascript file, for the dropdown menu and the search engine