// Elementos de formulário e botões
const formCadastro = document.getElementById("formCadastro");
const btnAdicionar = document.getElementById("btnAdicionar");
const resultadoPesquisa = document.getElementById("resultadoPesquisa");
const campoBusca = document.getElementById("buscarNome");

// Função para exibir o formulário de cadastro quando o botão "Adicionar Usuário" for clicado
btnAdicionar.addEventListener("click", () => {
    formCadastro.style.display = formCadastro.style.display === "none" ? "block" : "none";
});

// Função para gerar um ID único e sequencial, começando em 1
function gerarNovoId() {
    let ultimoId = parseInt(localStorage.getItem("ultimoId")) || 0;
    ultimoId++;
    localStorage.setItem("ultimoId", ultimoId); // Armazena o próximo ID no localStorage
    return ultimoId;
}

// Função para cadastrar um novo usuário
formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const novoUsuario = { id: gerarNovoId(), nome };

    // Recupera a lista de usuários do localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o nome já está cadastrado
    const usuarioExistente = usuarios.find(usuario => 
        usuario.nome.toLowerCase() === nome.toLowerCase()
    );

    if (usuarioExistente) {
        alert("Usuário já cadastrado com o mesmo nome!");
    } else {
        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Usuário cadastrado com sucesso!");
        formCadastro.reset();
        atualizarTabela();
    }
});

// Função para atualizar a tabela com os usuários cadastrados
function atualizarTabela() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const tabelaUsuarios = document.getElementById("tabelaUsuarios");
    tabelaUsuarios.innerHTML = ""; // Limpa a tabela

    usuarios.forEach(usuario => {
        const linha = document.createElement("tr");

        const colunaId = document.createElement("td");
        colunaId.textContent = usuario.id;
        linha.appendChild(colunaId);

        const colunaNome = document.createElement("td");
        colunaNome.textContent = usuario.nome;
        linha.appendChild(colunaNome);

        tabelaUsuarios.appendChild(linha);
    });
}

// Função para excluir um usuário pelo nome
document.getElementById("btnExcluir").addEventListener("click", () => {
    const nomeParaExcluir = prompt("Digite o nome do usuário que deseja excluir:");
    if (nomeParaExcluir) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuariosFiltrados = usuarios.filter(usuario => usuario.nome.toLowerCase() !== nomeParaExcluir.toLowerCase());

        if (usuarios.length === usuariosFiltrados.length) {
            alert("Usuário não encontrado.");
        } else {
            localStorage.setItem("usuarios", JSON.stringify(usuariosFiltrados));
            alert("Usuário excluído com sucesso!");
            atualizarTabela();
        }
    }
});

// Função para pesquisar um usuário pelo nome e exibir/ocultar resultados
document.getElementById("btnPesquisar").addEventListener("click", () => {
    const nomeBusca = campoBusca.value.toLowerCase();
    if (nomeBusca) {
        pesquisarUsuario(nomeBusca);
    } else {
        resultadoPesquisa.style.display = "none"; // Oculta a lista de resultados se o campo estiver vazio
    }
});

// Função de pesquisa
function pesquisarUsuario(nomeBusca) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    resultadoPesquisa.innerHTML = ""; // Limpa resultados anteriores
    resultadoPesquisa.style.display = "block"; // Exibe a lista de resultados

    const usuariosEncontrados = usuarios.filter(usuario => usuario.nome.toLowerCase().includes(nomeBusca));

    if (usuariosEncontrados.length > 0) {
        usuariosEncontrados.forEach(usuario => {
            const item = document.createElement("li");
            item.textContent = `ID: ${usuario.id} - Nome: ${usuario.nome}`;
            resultadoPesquisa.appendChild(item);
        });
    } else {
        resultadoPesquisa.innerHTML = "<li>Usuário não encontrado</li>";
    }
}

// Oculta resultados ao clicar fora da área de pesquisa
document.addEventListener("click", (event) => {
    if (!campoBusca.contains(event.target) && !resultadoPesquisa.contains(event.target) && !event.target.classList.contains("pesquisar")) {
        resultadoPesquisa.style.display = "none"; // Oculta os resultados de pesquisa
    }
});

// Chama a função para preencher a tabela ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    formCadastro.style.display = "none"; // Oculta o formulário de cadastro inicialmente
    atualizarTabela();
});
