const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

setInterval(() => {
  const data_current = new Date();
  let hrs = data_current.getHours();
  let min = data_current.getMinutes();
  let sec = data_current.getSeconds();

  if (hrs < 10){
    hrs = '0'+ hrs
  }
  if (min < 10){
    min = '0'+ min
  }
  if (sec < 10){
    sec = '0'+ sec
  }

  horas.textContent = hrs
  minutos.textContent = min
  segundos.textContent = sec
  
});

