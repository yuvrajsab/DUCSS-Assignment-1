const addButton = document.querySelector('#nav-dropdown-add-icon');
const profileButton = document.querySelector('#nav-dropdown-profile');

addButton.addEventListener("click", function(e) {
    e.stopPropagation();
    let dropdown = addButton.parentElement.querySelector('.dropdown-menu');
    dropdown.classList.add('show');
});

profileButton.addEventListener("click", function(e) {
    e.stopPropagation();
    let dropdown = profileButton.parentElement.querySelector('.dropdown-menu');
    dropdown.classList.add('show');
});

window.onclick = function(event) {
    let dropdown = addButton.parentElement.querySelector('.dropdown-menu');
    let dropdown2 = profileButton.parentElement.querySelector('.dropdown-menu');

    dropdown.classList.remove('show');
    dropdown2.classList.remove('show');
}