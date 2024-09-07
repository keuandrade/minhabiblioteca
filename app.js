function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite o termo de busca</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.titulo}">
                <div class="conteudo">
                    <h2 class="titulo">${dado.titulo}</h2>
                    <p class="descricao">${dado.descricao}</p>
                    <a href="${dado.link}" class="link">Mais informações</a>
                </div>
            </div>
        `;
        }        
    }

    if (!resultados) {
        resultados = "<p>Livro não encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}




