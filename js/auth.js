// De momento se guardan en localstorage, esto se debe modificar cuando lo conectemos con la base de datos
function getUsers() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function saveUsers(users) {
  localStorage.setItem("usuarios", JSON.stringify(users));
}

function getActiveUser() {
  return JSON.parse(localStorage.getItem("usuarioActivo"));
}

function setActiveUser(user) {
  localStorage.setItem("usuarioActivo", JSON.stringify(user));
}

function logout() {
  localStorage.removeItem("usuarioActivo");
}


//Registro por localstorage, tambien nos toca cambiarlo
function registrarUsuario(datos) {
  const usuarios = getUsers();

  let nuevoUsuario = {
    idUsuario: Date.now(),
    email: datos.email,
    contrasena: datos.contrasena,
    direccion: datos.direccion,
    telefono: datos.telefono,
    rol: datos.rol
  };

  if (datos.rol === "comprador") {
    nuevoUsuario.nombre = datos.nombre;
    nuevoUsuario.apellido = datos.apellido;
  }

  if (datos.rol === "proveedor") {
    nuevoUsuario.razonSocial = datos.razonSocial;
    nuevoUsuario.nit = datos.nit;
  }

  if (datos.rol === "repartidor") {
    nuevoUsuario.nombre = datos.nombre;
    nuevoUsuario.apellido = datos.apellido;
    nuevoUsuario.placaVehiculo = datos.placaVehiculo;
    nuevoUsuario.modeloVehiculo = datos.modeloVehiculo;
  }

  usuarios.push(nuevoUsuario);
  saveUsers(usuarios);
  alert("Usuario registrado con éxito");
}


function login(email, contrasena) {
  const usuarios = getUsers();
  const user = usuarios.find(u => u.email === email && u.contrasena === contrasena);

  if (user) {
    setActiveUser(user);
    return user;
  } else {
    return null;
  }
}
