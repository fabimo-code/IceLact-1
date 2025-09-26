// Navegación simple
function irA(rol) {
  if (rol === "admin") {
    window.location.href = "admin.html";
  } else if (rol === "comprador") {
    window.location.href = "comprador.html";
  }
}

function volver() {
  window.location.href = "index.html";
}

// Lista de productos en memoria (simulación de BD)
let productos = JSON.parse(localStorage.getItem("productos")) || [];
let carrito = [];

// ADMIN: agregar producto
if (document.getElementById("formProducto")) {
  const form = document.getElementById("formProducto");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombreProducto").value;
    const precio = document.getElementById("precioProducto").value;

    productos.push({ nombre, precio });
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductosAdmin();
    form.reset();
  });

  mostrarProductosAdmin();
}

function mostrarProductosAdmin() {
  const lista = document.getElementById("listaProductos");
  lista.innerHTML = "";
  productos.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    lista.appendChild(li);
  });
}

// COMPRADOR: ver productos y carrito
if (document.getElementById("productosDisponibles")) {
  mostrarProductosComprador();
}

function mostrarProductosComprador() {
  const lista = document.getElementById("productosDisponibles");
  lista.innerHTML = "";
  productos.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    const btn = document.createElement("button");
    btn.textContent = "Agregar al carrito";
    btn.onclick = () => {
      carrito.push(p);
      mostrarCarrito();
    };
    li.appendChild(btn);
    lista.appendChild(li);
  });
}

function mostrarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";
  carrito.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    lista.appendChild(li);
  });
}
