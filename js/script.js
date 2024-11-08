const posts = [             //Essa variável não está fazendo nada, ela está apenas mantendo a informação na memória do PC.
    {
        title: "Google Chrome",
        content: "O Google foi criado como um mecanismo para indexar sites, ou seja, um buscador."
    },
    {
        title: "Mozila Firefox",
        content: "A história do Mozilla Firefox começa com o projeto Mozilla, lançado em 1998, que tinha como objetivo aproveitar a criatividade de programadores online e a inovação do mercado de navegadores"
    },
    {
        title: "Microsoft Edge",
        content: "O Microsoft Edge foi criado a partir do projeto de fonte aberta Chromium, que é a base do Google Chrome."
    },
];

const wrapper = document.getElementById("posts");     //Wrapper (envelope). A partir desse momento, a variável "Wrapper" tem referência da DIV "section, por meio do ID "posts".

for (var i = 0; i < posts.length; i++) {
    const postData = posts[i];               //A variável inicial/index "i" vai passar pelos objetos da RAY "posts" e vai armazenar nessa variável "postData"
    
    const article = document.createElement("article"); //Aqui, está sendo criada uma variável chamada "article" e ela é usada para criar uma TAG "article", ou seja, essa variável acessou o documento HTML e por meio do "creatElement" criou a TAG "article" do HTML. É como se eu tivesse digitado uma TAG "article" direto na estrutura HTML!
    article.classList.add("article");
   
    const title = document.createElement("h2");
    title.classList.add("article-title");
    
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);

    const content = document.createElement("p");
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    wrapper.appendChild(article); 
}