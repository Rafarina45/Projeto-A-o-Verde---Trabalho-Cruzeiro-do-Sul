export async function loadTemplate(route) {
  const routes = { "/": "pages/home.html", "/projetos": "pages/projetos.html", "/cadastro": "pages/cadastro.html" };
  const path = routes[route] || routes["/"];
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Erro ao carregar template");
    return await res.text();
  } catch (e) {
    return `<p>Erro ao carregar conteúdo: ${e.message}</p>`;
  }
}