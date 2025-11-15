// === 📘 LISTA DE BRAWLERS ===
// Puedes reemplazar las imágenes por las tuyas dentro de la carpeta /imagenes/brawlers/

const brawlers = [
  // Comunes
  { nombre: "Shelly", rareza: "Común", imagen: "imagenes/brawlers/Shelly.png"},
  { nombre: "Colt", rareza: "Común", imagen: "imagenes/brawlers/Colt.png", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Bull", rareza: "Común", imagen: "imagenes/brawlers/Bull.png", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Brock", rareza: "Común", imagen: "imagenes/brawlers/Brock.png", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Rico", rareza: "Común", imagen: "imagenes/brawlers/Rico.png", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Jessie", rareza: "Común", imagen: "imagenes/brawlers/Jessie.png", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Nita", rareza: "Común", imagen: "imagenes/brawlers/Nita.png", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Dynamike", rareza: "Común", imagen: "imagenes/brawlers/Dynamike.png", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Bo", rareza: "Común", imagen: "imagenes/brawlers/bo.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Tick", rareza: "Común", imagen: "imagenes/brawlers/Tick.png", modoImg: "imagenes/modos/atrapagemas.png" },

  // Raros
  { nombre: "El Primo", rareza: "Raro", imagen: "imagenes/brawlers/Primo.png", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Barley", rareza: "Raro", imagen: "imagenes/brawlers/Barley.png", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Poco", rareza: "Raro", imagen: "imagenes/brawlers/Poco.png", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Rosa", rareza: "Raro", imagen: "imagenes/brawlers/Rosa.png", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Jacky", rareza: "Raro", imagen: "imagenes/brawlers/Jacky.png", modoImg: "imagenes/modos/atrapagemas.png" },

  // Superraros
  { nombre: "Carl", rareza: "Súper Raro", imagen: "imagenes/brawlers/Carl.png", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Penny", rareza: "Súper Raro", imagen: "imagenes/brawlers/Penny.png", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Darryl", rareza: "Súper Raro", imagen: "imagenes/brawlers/Darryl.png", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Rico", rareza: "Súper Raro", imagen: "imagenes/brawlers/Rico.png", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Bibi", rareza: "Súper Raro", imagen: "imagenes/brawlers/Bibi.png", modoImg: "imagenes/modos/balonbrawl.png" },

  // Épicos
  { nombre: "Pam", rareza: "Épico", imagen: "imagenes/brawlers/pam.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Piper", rareza: "Épico", imagen: "imagenes/brawlers/piper.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Frank", rareza: "Épico", imagen: "imagenes/brawlers/frank.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Bea", rareza: "Épico", imagen: "imagenes/brawlers/bea.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Nani", rareza: "Épico", imagen: "imagenes/brawlers/nani.webp", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Edgar", rareza: "Épico", imagen: "imagenes/brawlers/edgar.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Griff", rareza: "Épico", imagen: "imagenes/brawlers/griff.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Grom", rareza: "Épico", imagen: "imagenes/brawlers/grom.webp", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Bonnie", rareza: "Épico", imagen: "imagenes/brawlers/bonnie.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Mandy", rareza: "Épico", imagen: "imagenes/brawlers/mandy.webp", modoImg: "imagenes/modos/cazaestelar.png" },

  // Míticos
  { nombre: "Mortis", rareza: "Mítico", imagen: "imagenes/brawlers/mortis.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Tara", rareza: "Mítico", imagen: "imagenes/brawlers/tara.webp", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Gene", rareza: "Mítico", imagen: "imagenes/brawlers/gene.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Max", rareza: "Mítico", imagen: "imagenes/brawlers/max.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Mr. P", rareza: "Mítico", imagen: "imagenes/brawlers/mrp.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Sprout", rareza: "Mítico", imagen: "imagenes/brawlers/sprout.webp", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Byron", rareza: "Mítico", imagen: "imagenes/brawlers/byron.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Squeak", rareza: "Mítico", imagen: "imagenes/brawlers/squeak.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Gray", rareza: "Mítico", imagen: "imagenes/brawlers/gray.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Pearl", rareza: "Mítico", imagen: "imagenes/brawlers/pearl.webp", modoImg: "imagenes/modos/supervivencia.png" },

  // Legendarios
  { nombre: "Spike", rareza: "Legendario", imagen: "imagenes/brawlers/spike.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Crow", rareza: "Legendario", imagen: "imagenes/brawlers/crow.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Leon", rareza: "Legendario", imagen: "imagenes/brawlers/leon.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Sandy", rareza: "Legendario", imagen: "imagenes/brawlers/sandy.webp", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Amber", rareza: "Legendario", imagen: "imagenes/brawlers/amber.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Meg", rareza: "Legendario", imagen: "imagenes/brawlers/meg.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Chester", rareza: "Legendario", imagen: "imagenes/brawlers/chester.webp", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Cordelius", rareza: "Legendario", imagen: "imagenes/brawlers/cordelius.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Kit", rareza: "Legendario", imagen: "imagenes/brawlers/kit.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Melodie", rareza: "Legendario", imagen: "imagenes/brawlers/melodie.webp", modoImg: "imagenes/modos/balonbrawl.png" },

  // Cromáticos
  { nombre: "Surge", rareza: "Cromático", imagen: "imagenes/brawlers/surge.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Colette", rareza: "Cromático", imagen: "imagenes/brawlers/colette.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Lou", rareza: "Cromático", imagen: "imagenes/brawlers/lou.webp", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Colonel Ruffs", rareza: "Cromático", imagen: "imagenes/brawlers/ruffs.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Belle", rareza: "Cromático", imagen: "imagenes/brawlers/belle.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Buzz", rareza: "Cromático", imagen: "imagenes/brawlers/buzz.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Ash", rareza: "Cromático", imagen: "imagenes/brawlers/ash.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Lola", rareza: "Cromático", imagen: "imagenes/brawlers/lola.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Fang", rareza: "Cromático", imagen: "imagenes/brawlers/fang.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Eve", rareza: "Cromático", imagen: "imagenes/brawlers/eve.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Janet", rareza: "Cromático", imagen: "imagenes/brawlers/janet.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Otis", rareza: "Cromático", imagen: "imagenes/brawlers/otis.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Sam", rareza: "Cromático", imagen: "imagenes/brawlers/sam.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Buster", rareza: "Cromático", imagen: "imagenes/brawlers/buster.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "R-T", rareza: "Cromático", imagen: "imagenes/brawlers/rt.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Maisie", rareza: "Cromático", imagen: "imagenes/brawlers/maisie.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Hank", rareza: "Cromático", imagen: "imagenes/brawlers/hank.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Doug", rareza: "Cromático", imagen: "imagenes/brawlers/doug.webp", modoImg: "imagenes/modos/asaltos.png" },
  { nombre: "Chuck", rareza: "Cromático", imagen: "imagenes/brawlers/chuck.webp", modoImg: "imagenes/modos/cazaestelar.png" },
  { nombre: "Mico", rareza: "Cromático", imagen: "imagenes/brawlers/mico.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Larry & Lawrie", rareza: "Cromático", imagen: "imagenes/brawlers/larrylawrie.webp", modoImg: "imagenes/modos/atrapagemas.png" },
  { nombre: "Clancy", rareza: "Cromático", imagen: "imagenes/brawlers/clancy.webp", modoImg: "imagenes/modos/supervivencia.png" },
  { nombre: "Kitty", rareza: "Cromático", imagen: "imagenes/brawlers/kitty.webp", modoImg: "imagenes/modos/balonbrawl.png" },
  { nombre: "Spike Dark", rareza: "Cromático", imagen: "imagenes/brawlers/spikedark.webp", modoImg: "imagenes/modos/atrapagemas.png" }
];

// === 🧠 FUNCIÓN PARA CREAR LAS TARJETAS ===
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("brawlers-container");

  brawlers.forEach(b => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("recuadro");
    tarjeta.innerHTML = `
      <div class="modo-container">
        <img src="${b.modoImg}" alt="Modo de ${b.nombre}" class="modo-icono">
      </div>
      <img src="${b.imagen}" alt="${b.nombre}" class="brawler-img">
      <h2>${b.nombre}</h2>
      <p><strong>Rareza:</strong> ${b.rareza}</p>
    `;
    contenedor.appendChild(tarjeta);
  });
});

document.querySelectorAll(".brawler-card").forEach(card => {
  card.addEventListener("click", () => {
    card.querySelector(".brawler-inner").classList.toggle("flipped");
  });
});
