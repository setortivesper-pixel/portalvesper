document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("popup-esocial");

    if (!popup) {
        return;
    }

    const fechar = document.getElementById("popup-close");
    const agoraNao = document.getElementById("popup-later");


    function abrirPopup() {

        popup.classList.add("active");

    }


    function fecharPopup() {

        popup.classList.remove("active");

    }


    // TESTE:
    // O popup aparece toda vez que a página é aberta.
    setTimeout(function () {

        abrirPopup();

    }, 800);


    fechar.addEventListener(
        "click",
        fecharPopup
    );


    agoraNao.addEventListener(
        "click",
        fecharPopup
    );


    // Fecha ao clicar fora do popup

    popup.addEventListener("click", function (event) {

        if (event.target === popup) {

            fecharPopup();

        }

    });

});