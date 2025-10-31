export function initFormValidation() {
  const form = document.querySelector("form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const cep = form.cep.value.trim();
    let erros = [];
    if (nome.length < 3) erros.push("Nome deve ter pelo menos 3 caracteres.");
    if (!email.includes("@")) erros.push("E-mail inválido.");
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) erros.push("CPF no formato 000.000.000-00.");
    if (!/^\d{5}-\d{3}$/.test(cep)) erros.push("CEP no formato 00000-000.");
    const errorDiv = document.getElementById("form-errors") || document.createElement("div");
    errorDiv.id = "form-errors";
    errorDiv.style.color = "red";
    errorDiv.style.marginTop = "10px";
    form.appendChild(errorDiv);
    if (erros.length > 0) errorDiv.innerHTML = erros.map((e) => `<p>⚠️ ${e}</p>`).join("");
    else {
      errorDiv.innerHTML = "<p style='color:green;'>✅ Cadastro enviado com sucesso!</p>";
      form.reset();
    }
  });
}