(function($) {
    "use strict";

    var style
    var timer;
    var $hashimg;
    var $containerAlbuns = $(".albums");
    var $containerInfo = $(".album_info");
    var containerAlbuns;
    var containerInfo;

    var arrSel = [{
            hashId: 'perfil',
            albumSrc: 'http://localhost:8080/sliphis/img/mobile_img/cont2.png',
            info: 'PERFIL: Texto Texto Texto Texto'
        },
        {
            hashId: 'carteira',
            albumSrc: 'http://localhost:8080/sliphis/img/mobile_img/cont3.png',
            info: 'CARTEIRA: Texto Texto Texto Texto'

        }, {
            hashId: 'mercado',
            albumSrc: 'http://localhost:8080/sliphis/img/mobile_img/cont2.png',
            info: 'MERCADO: Texto Texto Texto Texto'
        },
        {
            hashId: 'vales',
            albumSrc: 'http://localhost:8080/sliphis/img/mobile_img/cont3.png',
            info: 'VALES: Texto Texto Texto Texto'
        },
        {
            hashId: 'amigos',
            albumSrc: 'http://localhost:8080/sliphis/img/mobile_img/cont2.png',
            info: 'AMIGOS: Texto Texto Texto Texto'
        }
    ];

    buildContainerAlbuns();

    function buildContainerAlbuns() {

        $(arrSel).each(function(index) {

            containerAlbuns = (index == 0) ? "<div class='album'><img src='" + arrSel[index].albumSrc + "' style='position: relative; z-index: 1;'></div>" :
                "<div class='album'><img src='" + arrSel[index].albumSrc + "'></div>";

            containerInfo = (index == 0) ? "<div class='info'>" + arrSel[index].info + "</div>" : "<div class='info' style='display: none;'>" + arrSel[index].info + "</div>";



            $containerAlbuns.append(containerAlbuns);

            $containerInfo.append(containerInfo);
        });


            console.log($containerAlbuns);
            console.log($containerInfo);

        RemoveContainers();
    }

    function RemoveContainers() {
        $containerAlbuns = null;
        $containerInfo = null;
        containerAlbuns = null;
        containerInfo = null;
    }

    $('.right').mouseover(function() {
        console.log("evento mouseover right desativado");
        // if (step == 3) return;
        // $('.album').eq(step).animate({ 'margin-left': '-355px' });
        // $('.info').eq(step).animate({ 'margin-left': '-100000px' });
        // step += 1;
    });

    $('.left').mouseover(function() {
        console.log("evento mouseover left desativado");
        // if (step == 0) return;
        // console.log(step);
        // console.log($('.album'));
        // $('.album').eq(step - 1).animate({ 'margin-left': 0 });
        // $('.info').eq(step - 1).animate({ 'margin-left': 0 });
        // step -= 1;
    });

    $('#container_img img').on('mouseover', function(e) {
        e.stopPropagation();

        clearTimeout(timer);

        $hashimg = $(this).attr("val-sel");

        timer = setTimeout(function() {
            ExecuteAnimate($hashimg);
        }, 300);

    });

    function ExecuteAnimate(seletor) {

        $(arrSel).each(function(index) {

            if (seletor == arrSel[index].hashId) {
                $('.album').eq(index).animate({ left: 0 });
                $('.info').eq(index).show();

            } else {
                $('.album').eq(index).animate({ left: 255 });
                $('.info').eq(index).hide();
            }
        });
    }
})(jQuery);