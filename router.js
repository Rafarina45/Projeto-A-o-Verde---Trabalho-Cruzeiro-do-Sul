export function initRouter(callback) {
  const routes = { "/": "/pages/home.html", "/projetos": "/pages/projetos.html", "/cadastro": "/pages/cadastro.html" };
  async function navigate() {
    const path = location.hash.replace("#", "") || "/";
    await callback(path);
  }
  window.addEventListener("hashchange", navigate);
  navigate();
}