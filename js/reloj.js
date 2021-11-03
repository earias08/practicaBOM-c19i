function obtenerFecha(){
    let fecha = new Date();
    console.log(fecha)
    console.log(fecha.getDate()) // 0 a 6, 0 dia domingo
    console.log(fecha.getDay()) // numero del dia 1 a 31
    console.log(fecha.getMonth()) // 0 a 11, 0 es enero
    
    let fechaReloj = document.querySelector('#fecha');
    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado'];
    let meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Maryo', 'Junio', 'julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    
    fechaReloj.innerHTML = `${semana[fecha.getDate()]} ${fecha.getDay()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;
    
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    
    // agregar 0 solo cuando el numero es menor a 10
    if(hora<10){
        hora = '0'+ hora;
    }
    if(minutos<10){
        minutos = '0'+ minutos;
    }
    if(segundos<10){
        segundos = '0'+ segundos;
    }

    let horaReloj = document.querySelector('#hora');
    horaReloj.innerHTML = `${hora}:${minutos}:${segundos}`
}

setInterval(obtenerFecha, 1000);




