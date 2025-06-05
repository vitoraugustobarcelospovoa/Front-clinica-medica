# Front Clínica Médica – Templates HTML

[![Status](https://img.shields.io/badge/status-finalizado-green)]()
[![License](https://img.shields.io/badge/licença-Privado-red)]()
[![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5)]()
[![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)]()
[![Git](https://img.shields.io/badge/Git-version%20control-orange?logo=git)]()
[![GitHub](https://img.shields.io/badge/GitHub-repo-181717?logo=github)]()



Coleção de **templates HTML estáticos** para projetos de clínicas médicas, consultórios ou sistemas de agendamento. Incluem páginas de cadastro, listagem, login e dashboard, além de estilos (Bootstrap 5), ícones e fontes.

## Índice rápido

- [Pré‑requisitos](#pré‑requisitos)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Visão geral dos templates](#visão-geral-dos-templates)
- [Como usar](#como-usar)
- [Personalização](#personalização)
- [Créditos](#créditos)

## Pré‑requisitos

- **Navegador moderno** (Chrome, Firefox, Edge ou Safari)  
- Nenhum backend é necessário – as páginas são totalmente estáticas.

## Estrutura de pastas
```text
Front-clinica-medica-main/
├── index.html
├── login.html
├── home.html …
├── CSS/
│   ├── bootstrap.min.css
│   ├── *.css (estilos de cada módulo)
│   ├── FONT/Roboto/*.ttf
│   └── IMG/*.{png,jpg,svg}
└── README.md (este arquivo)
```

## Visão geral dos templates

| Arquivo | Título *<title>* | Função sugerida |
|---------|-----------------|-----------------|
| `Especialidade-add.html` | Cadastro de Especialidade | Cadastro / listagem de especialidades |
| `Especialidades.html` | Especialidades | Cadastro / listagem de especialidades |
| `MarcarConsulta.html` | Marcar Consulta | Marcação / listagem de consultas |
| `Paciente-lista.html` | Especialidades | Cadastro / listagem de pacientes |
| `Paciente.html` | Home | Cadastro / listagem de pacientes |
| `Usuarios.html` | Cadastro de Usuário | Gestão de usuários / permissões |
| `consulta-table.html` | Consulta | Marcação / listagem de consultas |
| `convenio.html` | Cadastro de convênio | Cadastro de convênios |
| `conveniobt-lista.html` | Especialidades | Cadastro de convênios |
| `conveniobt.html` | Home | Cadastro de convênios |
| `home.html` | Home | Dashboard pós‑login |
| `homebt.html` | Home | Dashboard pós‑login |
| `index.html` | Clínica Médica | Landing page pública |
| `login.html` | Login | Tela de autenticação |
| `medico.html` | Cadastro de Médico | Cadastro de médicos |
| `medicocadratos.html` | Cadastro de Médico | Cadastro de médicos |
| `oi.html` | Página Inicial | Página auxiliar |
| `prontuario.html` | Cadastro de Prontuário | Cadastro / listagem de prontuários |
| `prontuariolista.html` | Lista de Prontuários | Cadastro / listagem de prontuários |
| `usuarioCadastro.html` | Cadastro de Usuário | Gestão de usuários / permissões |

## Como usar

1. **Clone ou baixe** este repositório.
2. Abra `index.html` ou qualquer outro template diretamente no navegador.
3. Se preferir, use um servidor local (ex.: *VS Code Live Server*) apontando para a pasta raiz.
4. Integre com seu backend (Java, Node, PHP etc.) substituindo formulários `<form>` por chamadas à sua API.

## Personalização

- **Cores e fontes:** editáveis em `CSS/*.css`. A maior parte do layout usa utilitários do Bootstrap 5.  
- **Imagens e ícones:** localizados em `CSS/IMG`. Substitua pelos logotipos ou fotos da sua clínica.  
- **Textos fixos:** títulos e rótulos estão diretamente nos HTML – basta alterar.  
- **Novos componentes:** consulte a [documentação do Bootstrap](https://getbootstrap.com/) para adicionar elementos.

## Créditos

- **Bootstrap 5** – licença MIT  
- **Roboto** – Google Fonts  
- **Bootstrap Icons**  
