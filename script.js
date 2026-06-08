const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

const revealItems = document.querySelectorAll(".reveal-on-scroll");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js-reveal-ready");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const hero = document.querySelector(".hero");

if (hero) {
  const positiveCursors = ["😊", "✨", "🚀", "⭐", "💡"];
  let cursorIndex = 0;
  let cursorTimer;

  const makeEmojiCursor = (emoji) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
        <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="28">${emoji}</text>
      </svg>
    `;

    return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 21 21, auto`;
  };

  const updateHeroCursor = () => {
    hero.style.cursor = makeEmojiCursor(positiveCursors[cursorIndex]);
    cursorIndex = (cursorIndex + 1) % positiveCursors.length;
  };

  hero.addEventListener("mouseenter", () => {
    updateHeroCursor();
    cursorTimer = window.setInterval(updateHeroCursor, 2000);
  });

  hero.addEventListener("mouseleave", () => {
    window.clearInterval(cursorTimer);
    cursorTimer = undefined;
    hero.style.cursor = "";
  });
}
