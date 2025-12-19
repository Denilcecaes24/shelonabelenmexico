 // Función para mostrar el contenido correspondiente
 function showContentt(tabIndex) {
    // Ocultar todos los contenidos
    const contents1 = document.querySelectorAll('.tab-contentt');
    contents1.forEach(content => content.classList.remove('active-contentt'));

    // Eliminar la clase activa de las pestañas
    const tabs1 = document.querySelectorAll('.tabb1');
    tabs1.forEach(tab => tab.classList.remove('active-tabb1'));

    // Mostrar el contenido correspondiente
    document.getElementById('contentt' + tabIndex).classList.add('active-contentt');

    // Agregar la clase activa a la pestaña seleccionada
    tabs1[tabIndex - 1].classList.add('active-tabb1');
  }


   // Función para mostrar el contenido correspondiente
 function showContentt2(tabIndex) {
    // Ocultar todos los contenidos
    const contents2 = document.querySelectorAll('.tab-contentt2');
    contents2.forEach(content => content.classList.remove('active-contentt2'));

    // Eliminar la clase activa de las pestañas
    const tabs2 = document.querySelectorAll('.tabb2');
    tabs2.forEach(tab => tab.classList.remove('active-tabb2'));

    // Mostrar el contenido correspondiente
    document.getElementById('contenttt' + tabIndex).classList.add('active-contentt2');

    // Agregar la clase activa a la pestaña seleccionada
    tabs2[tabIndex - 1].classList.add('active-tabb2');
  }