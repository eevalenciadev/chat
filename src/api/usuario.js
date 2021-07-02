class Usuario {
  static Obtener() {
    return fetch("https://jsonplaceholder.typicode.com/users");
  }
  static Detalle(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}

export default Usuario;
