
var dropdownItems = document.querySelectorAll('.navmenu .dropdown');
const burger = document.querySelector('.burger');
const navmenu = document.querySelector('.navmenu');
const navright = document.querySelector('.navright')
const navmenuList = document.querySelector('.navmenu ul');


let isNavmenuOpen = false;

// Function to close the navmenu
const closeNavmenu = () => {
  isNavmenuOpen = false;
  navmenu.style.display = "none";
  navright.style.display = "none";
};

// Open or close navmenu when burger is clicked
burger.addEventListener("click", () => {
  isNavmenuOpen = !isNavmenuOpen;
  navmenu.style.display = isNavmenuOpen ? "block" : "none";
  navright.style.display = isNavmenuOpen ? "block" : "none";

});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!navmenuList.contains(target) && !burger.contains(target)) {
    closeNavmenu();
  }
});

// Prevent closing when clicking on the dropdown items
const dropdownItem = document.querySelectorAll('.dropdown-menu li');
for (const item of dropdownItem) {
  item.addEventListener("click", (event) => {
    event.stopPropagation();
    closeNavmenu();
  });
}

  


dropdownItems.forEach(function(item) {
    var openicon = item.querySelector('.openicon');
    var closeicon = item.querySelector('.closeicon');

    item.addEventListener('click', function() {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            openicon.style.display = "block";
            closeicon.style.display = "none";
        } else {
            dropdownItems.forEach(function(dropdown) {
                dropdown.classList.remove('active');
                dropdown.querySelector('.openicon').style.display = "block";
                dropdown.querySelector('.closeicon').style.display = "none";
            });
            item.classList.add('active');
            openicon.style.display = "none";
            closeicon.style.display = "block";
        }
    });
});

// Close the dropdown when clicking outside
window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        dropdownItems.forEach(function(item) {
            item.classList.remove('active');
            item.querySelector('.openicon').style.display = "block";
            item.querySelector('.closeicon').style.display = "none";
        });
    }
});

