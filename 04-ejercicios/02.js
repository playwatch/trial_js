function nombreResolucion0402(ancho0402, alto0402){
    if(ancho0402>=7680 && alto0402 >= 4320)
        return '8K';
    else if(ancho0402>=3840 && alto0402 >= 2160)
        return '4k';
    else if(ancho0402>=2560 && alto0402 >= 1440)
        return 'WQHD';
    else if(ancho0402>=1920 && alto0402 >= 1080)
        return 'FHD';
    else if(ancho0402>=1280 && alto0402 >= 720)
        return 'HD';
    else return false;

}

let nombre0402= nombreResolucion0402(1000, 2200);
console.log(nombre0402);