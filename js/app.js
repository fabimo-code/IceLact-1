document.addEventListener("DOMContentLoaded", () => {

  //Esta es la alogica para los campos ocultos
  const rolSelect = document.getElementById("rol");
  if (rolSelect) {
    const camposComprador = document.getElementById("camposComprador");
    const camposProveedor = document.getElementById("camposProveedor");
    const camposRepartidor = document.getElementById("camposRepartidor");

    rolSelect.addEventListener("change", () => {
      const rol = rolSelect.value;

      if (camposComprador) camposComprador.style.display = "none";
      if (camposProveedor) camposProveedor.style.display = "none";
      if (camposRepartidor) camposRepartidor.style.display = "none";

      if (rol === "comprador") camposComprador.style.display = "block";
      if (rol === "proveedor") camposProveedor.style.display = "block";
      if (rol === "repartidor") camposRepartidor.style.display = "block";
    });
  }

  const formRegistro = document.getElementById("formRegistro");
  if (formRegistro) {
    formRegistro.addEventListener("submit", (e) => {
      e.preventDefault();

      const datos = {
        rol: document.getElementById("rol").value,
        nombre: document.getElementById("nombre")?.value || "",
        apellido: document.getElementById("apellido")?.value || "",
        razonSocial: document.getElementById("razonSocial")?.value || "",
        nit: document.getElementById("nit")?.value || "",
        placaVehiculo: document.getElementById("placaVehiculo")?.value || "",
        modeloVehiculo: document.getElementById("modeloVehiculo")?.value || "",
        email: document.getElementById("email").value,
        contrasena: document.getElementById("contrasena").value,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value
      };

      registrarUsuario(datos);
      formRegistro.reset();
    });
  }

  const formLogin = document.getElementById("formLogin");
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const contrasena = document.getElementById("loginContrasena").value;

      const user = login(email, contrasena);

      if (user) {
        alert(`Bienvenido, rol: ${user.rol}`);
        window.location.href = "index.html";
      } else {
        alert("Correo o contraseña incorrectos");
      }
    });
  }

});
