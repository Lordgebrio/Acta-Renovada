function firmaCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  let dibujando = false;

  function obtenerPosicion(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    let x, y;
    if (e.touches && e.touches.length > 0) {
      x = (e.touches[0].clientX - rect.left) * scaleX;
      y = (e.touches[0].clientY - rect.top) * scaleY;
    } else if (e.changedTouches && e.changedTouches.length > 0) {
      x = (e.changedTouches[0].clientX - rect.left) * scaleX;
      y = (e.changedTouches[0].clientY - rect.top) * scaleY;
    } else {
      x = (e.clientX - rect.left) * scaleX;
      y = (e.clientY - rect.top) * scaleY;
    }
    return { x, y };
  }

  function comenzar(e) {
    e.preventDefault();
    dibujando = true;
    const pos = obtenerPosicion(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function dibujar(e) {
    if (!dibujando) return;
    e.preventDefault();
    const pos = obtenerPosicion(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    // Para evitar saltos en touch, actualiza el punto de inicio
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function terminar(e) {
    if (!dibujando) return;
    dibujando = false;
    ctx.closePath();
  }

  // Mouse events
  canvas.addEventListener("mousedown", comenzar);
  canvas.addEventListener("mousemove", dibujar);
  canvas.addEventListener("mouseup", terminar);
  canvas.addEventListener("mouseleave", terminar);

  // Touch events
  canvas.addEventListener("touchstart", comenzar);
  canvas.addEventListener("touchmove", dibujar);
  canvas.addEventListener("touchend", terminar);
  canvas.addEventListener("touchcancel", terminar);
}

function limpiarFirma(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

firmaCanvas("firmaUsuario");
firmaCanvas("firmaTecnico");