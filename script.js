fetch("components/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Initialize Swiper after header is loaded
    initializeSwiper();
  });

fetch("components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

function initializeSwiper() {
  // Hero Slider
  new Swiper(".swiper-container", {
    loop: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
  });

  // Testimonials Slider
  new Swiper(".swiper-container-testimonials", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination-testimonials",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-item");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Deactivate all tabs
      tabs.forEach(item => {
        item.classList.remove("active-tab", "bg-[#002147]", "text-white");
        item.classList.add("hover:bg-[#002147]/10");
      });

      // Activate the clicked tab
      tab.classList.add("active-tab", "bg-[#002147]", "text-white");
      tab.classList.remove("hover:bg-[#002147]/10");

      // Hide all tab contents
      tabContents.forEach(content => {
        content.classList.add("hidden");
      });

      // Show the corresponding tab content
      const tabId = tab.getAttribute("data-tab");
      const activeContent = document.getElementById(tabId);
      if (activeContent) {
        activeContent.classList.remove("hidden");
      }
    });
  });
});
function openForm() {
  const popup = document.getElementById("myForm");
  const mainBtn = document.getElementById("mainChatBtn");
  const mainIcon = document.getElementById("mainBtnIcon");

  // Change main button icon to X
  mainIcon.classList.remove("fa-comments");
  mainIcon.classList.add("fa-times");
  mainBtn.style.backgroundColor = "#f8fafc";
  mainBtn.style.color = "#1d4ed8";
  mainBtn.style.border = "2px solid #1d4ed8";

  popup.style.display = "block";

  // Add click outside to close
  document.addEventListener("click", function closePopup(e) {
    if (!popup.contains(e.target) && !mainBtn.contains(e.target)) {
      closeForm();
      // document.removeEventListener("click", closePopup);
    } else {
      return;
    }
  });
}

function closeForm() {
  const popup = document.getElementById("myForm");
  const mainBtn = document.getElementById("mainChatBtn");
  const mainIcon = document.getElementById("mainBtnIcon");

  // Change main button icon back to comments
  mainIcon.classList.remove("fa-times");
  mainIcon.classList.add("fa-comments");
  mainBtn.style.backgroundColor = "#2563eb"; // blue-600
  mainBtn.style.color = "white";
  mainBtn.style.border = "none";

  popup.style.display = "none";
}

// Prevent popup from closing when clicking inside it
document.getElementById("myForm").addEventListener("click", function (e) {
  e.stopPropagation();
});
