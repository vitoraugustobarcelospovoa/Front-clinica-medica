function carregarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const selecionarUsuario = document.getElementById("selecionarUsuario");

    usuarios.forEach(usuario => {
        const opcao = document.createElement("option");
        opcao.value = usuario.email; 
        opcao.textContent = usuario.nome;
        selecionarUsuario.appendChild(opcao);
    });
}

document.addEventListener("DOMContentLoaded", carregarUsuarios);
