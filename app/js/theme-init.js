/* © 2026 Nikola Vojvodić · https://nikolxdev.github.io/ · All rights reserved, see LICENSE. [nv:2919f35f44] */
(function () {
  var settings = {};
  try {
    settings = (JSON.parse(localStorage.getItem("knjigoteka:v2")) || {}).settings || {};
  } catch (e) { }
  var dark = settings.theme ? settings.theme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  if (settings.lang) document.documentElement.lang = settings.lang;
})();
