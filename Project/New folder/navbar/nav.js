// ---------Responsive-navbar-active-animation-----------
function test() {
    const navbarContent = document.getElementById("navbarSupportedContent");
    const activeItem = navbarContent.querySelector(".active");
  
    if (!activeItem) return; // Handle case where no active item exists
  
    const itemPos = activeItem.getBoundingClientRect(); // Get dimensions and position
  
    const horiSelector = document.querySelector(".hori-selector");
    horiSelector.style.top = itemPos.top + "px";
    horiSelector.style.left = itemPos.left + "px";
    horiSelector.style.height = itemPos.height + "px";
    horiSelector.style.width = itemPos.width + "px";
  
    navbarContent.addEventListener("click", (event) => {
      if (!event.target.matches(".nav-link")) return; // Only handle clicks on links
  
      const clickedLink = event.target;
      const navItems = navbarContent.querySelectorAll("li");
      navItems.forEach((item) => item.classList.remove("active"));
      clickedLink.parentNode.classList.add("active");
  
      const newActiveItem = clickedLink.parentNode;
      const newItemPos = newActiveItem.getBoundingClientRect();
  
      horiSelector.style.top = newItemPos.top + "px";
      horiSelector.style.left = newItemPos.left + "px";
      horiSelector.style.height = newItemPos.height + "px";
      horiSelector.style.width = newItemPos.width + "px";
    });
  }
  
  document.addEventListener("DOMContentLoaded", test); // Run test on page load
  
  window.addEventListener("resize", () => {
    setTimeout(test, 500); // Debounce test call on resize
  });
  
  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.toggle("show"); // Use Bootstrap's show class
    setTimeout(test, 500);
  });
  
  // --------------add active class-on another-page move----------
  
  const path = window.location.pathname.split("/").pop();
  const targetLink = document.querySelector(
    `#navbarSupportedContent ul li a[href="${path === "" ? "index.html" : path}"]`
  );
  
  if (targetLink) {
    targetLink.parentNode.classList.add("active");
  }
  