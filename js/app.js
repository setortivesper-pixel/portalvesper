const paginaAtual = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

    if (link.getAttribute("href") === paginaAtual){

        link.classList.add("active");

    }

});