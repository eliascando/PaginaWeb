var visitas = parseInt(localStorage.getItem('visitas')) || 0;

function confirmarSalida() {
	if (confirm('¿Esta seguro de que desea salir de la pagina actual?')) {window.open('https://youtu.be/dQw4w9WgXcQ', '_blank');}
}

function actualizarContador() {
  visitas++;
  document.getElementById('contador-visitas').innerHTML = visitas;
  localStorage.setItem('visitas', visitas.toString());
}

function actualizarReloj() {
  var reloj = document.getElementById('reloj');
  var fecha = new Date();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  horas = (horas < 10) ? '0' + horas : horas;
  minutos = (minutos < 10) ? '0' + minutos : minutos;
  segundos = (segundos < 10) ? '0' + segundos : segundos;
  var horaActual = horas + ':' + minutos + ':' + segundos;
  reloj.innerHTML = horaActual;
}
setInterval(actualizarReloj, 1000);