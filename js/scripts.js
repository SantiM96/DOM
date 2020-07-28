(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
    
        // Añadir "Entrada 6" al aside

        var sidebar = document.querySelectorAll('aside ul');

        var newEnter = document.createElement('a');
        var newEnterInner = document.createTextNode('Entrada 6');
        newEnter.setAttribute('href', '#');
        newEnter.appendChild(newEnterInner);


        var newEnterList = document.createElement('li');
        newEnterList.appendChild(newEnter);
    

        sidebar[0].appendChild(newEnterList);














      
      
    
    
    });
  
})();