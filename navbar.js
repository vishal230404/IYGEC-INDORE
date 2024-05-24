function moveNavItems() {
  const navbar = document.getElementById('navbar');
  const dropdown = document.getElementById('dropdown');
  const dropdownContent = document.getElementById('dropdown-content');
  const navItems = Array.from(document.querySelectorAll('.nav-item'));
  
  // Reset navbar and dropdownContent
  while (dropdownContent.firstChild) {
    navbar.insertBefore(dropdownContent.firstChild, dropdown);
  }
  
  // Ensure dropdown is hidden initially
  dropdown.style.display = 'none';
  
  // Calculate available width
  const navbarWidth = navbar.clientWidth;
  let totalWidth = dropdown.clientWidth; // Include the dropdown itself in the width calculation

  // Move items to dropdown if they overflow the navbar
  for (let i = 0; i < navItems.length; i++) {
    const item = navItems[i];
    totalWidth += item.clientWidth;
    if (1.5*totalWidth > navbarWidth) {
      dropdownContent.appendChild(item);
    }
  }

  // Show dropdown if it has any items
  if (dropdownContent.children.length > 0) {
    dropdown.style.display = 'block';
  }
}

// Call the function initially to set the correct position
window.addEventListener('load', moveNavItems);

// Add event listener to call the function on window resize
window.addEventListener('resize', moveNavItems);

window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
});
window.addEventListener('scroll', () => {
const nav2 = document.getElementById('nav2');
if (window.scrollY > 50) {
    nav2.classList.add('scrolled');
} else {
    nav2.classList.remove('scrolled');
}
});


        window.onload = function() {
            // Make a GET request to home.html
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'navbar.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // If request is successful, extract content and insert it into the about.html
                    var data = xhr.responseText;
                    document.getElementById('homeContent').innerHTML = data;
                }
            };
            xhr.send();
        };
      
       