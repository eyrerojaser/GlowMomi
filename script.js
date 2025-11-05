document.getElementById("glowForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const estado = e.target.estado.value;
  const tiempo = e.target.tiempo.value;
  const necesidad = e.target.necesidad.value;

  const respuesta = `
    <h3>🌷 Tu Glow Time Personalizado</h3>
    <p><strong>Estado:</strong> ${estado}</p>
    <p><strong>Tiempo disponible:</strong> ${tiempo} minutos</p>
    <p><strong>Necesidad:</strong> ${necesidad}</p>
    <p>✨ <em>Tu rutina será generada aquí por la IA en la próxima fase.</em></p>
  `;

  document.getElementById("respuestaGlow").innerHTML = respuesta;
});
