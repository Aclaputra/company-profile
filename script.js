const searchIcon = document.getElementById('searchIcon');
const searchDropdown = document.getElementById('searchDropdown');

searchIcon.addEventListener('click', function() {
    if (searchDropdown.style.display === 'none' || searchDropdown.style.display === '') {
        searchDropdown.style.display = 'block';
    } else {
        searchDropdown.style.display = 'none';
    }
});
