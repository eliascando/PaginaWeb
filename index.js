var visitas = 0;

function confirmarSalida() {
	if (confirm('¿Esta seguro de que desea salir de la pagina actual?')) {					window.open('https://campusvirtual2.ug.edu.ec/login/index.php', '_blank');
	}
}

function actualizarContador() {
  visitas++;
  document.getElementById('contador').innerHTML = visitas;
}