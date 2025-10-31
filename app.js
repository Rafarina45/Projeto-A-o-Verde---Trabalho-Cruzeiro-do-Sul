import { initRouter } from "./router.js";
import { loadTemplate } from "./templates.js";
import { initFormValidation } from "./formValidation.js";

document.addEventListener("DOMContentLoaded", async () => {
  initRouter(async (route) => {
    const content = await loadTemplate(route);
    const appContent = document.getElementById("app-content");
    appContent.innerHTML = content;
    if (route === "/cadastro") initFormValidation();
  });
});