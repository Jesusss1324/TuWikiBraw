// === BOTÓN DE MODO OSCURO ===
const boton = document.getElementById("modo-btn");

boton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Cambiar icono según el modo
  if (document.body.classList.contains("dark-mode")) {
    boton.textContent = "☀️";
  } else {
    boton.textContent = "🌙";
  }
});

// === ELEMENTOS DEL MODAL ===
const modal = document.getElementById("modal");
const btnAgregar = document.getElementById("agregar-btn");
const btnGuardar = document.getElementById("guardar-btn");
const btnCancelar = document.getElementById("cancelar-btn");
const contenedor = document.getElementById("contenedor");

// Mostrar modal
btnAgregar.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Cerrar modal
btnCancelar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Guardar nuevo recuadro
btnGuardar.addEventListener("click", () => {
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const color = document.getElementById("color").value;
  const imagenInput = document.getElementById("imagen");

  if (!titulo) {
    alert("Por favor, ingresa un título.");
    return;
  }

  // Crear contenedor del recuadro
  const nuevo = document.createElement("div");
  nuevo.classList.add("recuadro");
  nuevo.style.backgroundColor = color;
  nuevo.setAttribute("data-color", color);

  // Contenido base con botón eliminar
  let contenido = `<button class="eliminar-btn">❌</button>`;

  // Si hay imagen cargada, la muestra
  if (imagenInput.files && imagenInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      contenido += `
        <img src="${e.target.result}" alt="${titulo}" style="width:100%; border-radius:8px; margin-bottom:10px;">
        <h2>${titulo}</h2>
        <p>${descripcion}</p>
      `;
      nuevo.innerHTML = contenido;
      contenedor.appendChild(nuevo);
      agregarEventosRecuadro(nuevo, color);
    };
    reader.readAsDataURL(imagenInput.files[0]);
  } else {
    contenido += `
      <h2>${titulo}</h2>
      <p>${descripcion}</p>
    `; 
    nuevo.innerHTML = contenido;
    contenedor.appendChild(nuevo);
    agregarEventosRecuadro(nuevo, color);
  }

  // Limpiar campos y cerrar modal
  document.getElementById("titulo").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("imagen").value = "";
  modal.style.display = "none";
});

// === FUNCIÓN PARA EVENTOS DE CADA RECUADRO ===
function agregarEventosRecuadro(recuadro, color) {
  // Hover → cambia color del fondo
  recuadro.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = color;
  });
  recuadro.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = ""; // vuelve al fondo original
  });

  // Eliminar recuadro
  const btnEliminar = recuadro.querySelector(".eliminar-btn");
  btnEliminar.addEventListener("click", () => {
    recuadro.classList.add("eliminando");
    setTimeout(() => recuadro.remove(), 300);
  });
}

document.getElementById('logo-link').addEventListener('click', (e) => {
  e.preventDefault();
  // Mostrar la misma vista que “Inicio”
  mostrarInicio(); // 👈 esta es la función que ya usas para cargar las tarjetas
});