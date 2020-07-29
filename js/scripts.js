(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {

        // Añadir "Entrada 6" al aside

        var sidebar = document.querySelectorAll('aside ul');

        var newEnter = document.createElement('A');
        var newEnterInner = document.createTextNode('Entrada 6');
        newEnter.setAttribute('href', '#');
        newEnter.appendChild(newEnterInner);

        var newEnterList = document.createElement('LI');
        newEnterList.appendChild(newEnter);

        sidebar[0].appendChild(newEnterList);


        // Insertar H2

        sidebar = document.querySelector('aside');

        var newTitleH2 = document.createElement('H2');
        var newTitleText = document.createTextNode('Posts más Visitados');
        newTitleH2.appendChild(newTitleText);

        sidebar.insertBefore(newTitleH2, sidebar.childNodes[0]);


        // Copiar H2 del main para armar una nueva lista

        var listsH2 = document.querySelectorAll('main h2');

        var newUl = document.createElement('UL');
        sidebar.insertBefore(newUl, sidebar.childNodes[1]);
        var sidebarNewUl = document.querySelector('aside ul');



        for (var i = 0; i < listsH2.length; i++) {
            var newLi = document.createElement('LI');
            var newLiText = document.createTextNode(listsH2[i].firstChild.textContent);
            newLi.appendChild(newLiText);
            newLi.setAttribute("style", "color: #00b8e4;;");
            sidebarNewUl.insertBefore(newLi, sidebarNewUl[0]);
        }




        // Remover elemento del DOM

        var firsthPost = document.querySelector('main article');
        firsthPost.parentNode.removeChild(firsthPost);
        //se eliminan desde el padre, subimos con .parentNode




        // Reemplazar elementos en el DOM

        var NewTitle = document.createElement('H2');
        var NewTitleText = document.createTextNode('Puente de la Torre Modificado');
        NewTitle.appendChild(NewTitleText);

        var oldTitle = document.querySelector('main article h2');

        oldTitle.parentNode.replaceChild(NewTitle, oldTitle);



        //console.log(oldTitle);


















    });

})();