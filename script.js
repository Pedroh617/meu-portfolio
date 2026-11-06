
// PEDRO.DEV — interações do menu.

// Seleciona os botões do menu.
const navItems = document.querySelectorAll(".nav-item");

// Seleciona as seções do site.
const sections = document.querySelectorAll("main section[id]");

// Atualiza automaticamente o ano do rodapé.
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Efeito ao clicar nos botões.
navItems.forEach((item) => {

  item.addEventListener("click", () => {

    // Remove o destaque dos outros botões.
    navItems.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });

    // Destaca o botão selecionado.
    item.classList.add("active");
    item.setAttribute("aria-current", "page");

  });

});

// Detecta qual seção está aparecendo na tela.
if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      const currentId = entry.target.id;

      navItems.forEach((item) => {

        const isActive =
          item.getAttribute("href") === `#${currentId}`;

        item.classList.toggle("active", isActive);

        if (isActive) {
          item.setAttribute("aria-current", "page");
        } else {
          item.removeAttribute("aria-current");
        }

      });

    });

  }, {
    rootMargin: "-35% 0px -50% 0px",
    threshold: 0
  });

  // Observa todas as seções.
  sections.forEach((section) => {
    observer.observe(section);
  });

}
