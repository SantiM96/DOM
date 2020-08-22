$(function() { 
    'use strict'

    let article = $('main article:last').clone();
    article.prependTo('main');  
    

    //Menú de hamburguesa para el menú
    $('#hambur').on('click', function () {  
        if ($('#menu > ul').is(":visible")) $('#menu > ul').slideUp(500);
        else                                $('#menu > ul').slideDown(500);
    })


    //Agregando objetos al DOM como lista al aside
    let travelList = {
        Primero: 'Washington',
        Segundo: 'Wellington',
        Tercero: 'Valparaiso',
        Cuarto: 'Madrid',
        Quinto: 'Quebec'
    }

    $.each(travelList, function (i, v) {
        if (i == 'Primero') {
            $('aside').append('<h2>Viaje Promocional</h2>');
            $('aside').append('<ul></ul>');
        }
        $('aside ul:last').append('<li>' + i + ' viajamos a ' + v + '</li>')
        $('aside ul:last').css({ 'color': '#00b8e4' });
    })
    


    //Agregar hover a lo añadido con scripts.js
    $('aside ul li').on('mouseenter', function() { 
        $(this).css({ 'color': '#ffffff' });
    })
    $('aside ul li').on('mouseleave', function() {
        $(this).css({ 'color': '#00b8e4' });
    })


    //Agrandar zoom a las fotos con click con .click() en vez de .on('click')
    $('article img').click(zoom);

    function zoom() { 
        if (this.width == 300) $(this).animate({ 'width': '100%' }, 500);
        else                   $(this).animate({ 'width': '300px' }, 500);
    }


    //Menú de Servicios
    $('.servicios a').click(serviceMenu);
    


    function serviceMenu() { 
        let blue = '#00b8e4',
            violet = 'rgb(219, 0, 141)';
        
        
        if (this.style.backgroundColor == violet) {
            $('.servicios a').css({ 'background-color': blue });
        }
        else {
            $('.servicios a').css({ 'background-color': blue });
            $(this).css({ 'background-color': violet });

            console.log(this);
            console.log($('#viajes-button')[0]);

            if (this == $('#viajes-button')) console.log('hola');


            //console.log($('.servicios a'));
        }

        
    }






})