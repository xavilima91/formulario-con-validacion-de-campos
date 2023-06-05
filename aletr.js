function mostrarGato(){
  Swal.fire({
  title: 'Limpiando campos',
  width: 500,
  padding: '3em',
  color: '#716add',
  background: '#fff url(3d.avif)',
  backdrop: `
      rgba(0,0,123,0.4)
      url(cat.gif)
      left top
      no-repeat
  `
  })

  
}


function mostrar(){
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

}
// // Seleccionar el formulario
// const form = document.querySelector('form');

// // Escuchar el evento de envío del formulario
// form.addEventListener('submit', (event) => {
// // Detener el comportamiento predeterminado del navegador
// event.preventDefault();

// // Realizar las acciones deseadas después de enviar el formulario
// // (por ejemplo, enviar los datos a un servidor mediante una solicitud AJAX)
// });

// const miBoton = document.querySelector('#btnGuardar');

// miBoton.addEventListener('click', () => {
//     swal("Guardados con exito!");
// });

const form = document.querySelector('form');
const mensajeLleno = document.querySelector('#mensaje-lleno');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', (event) => {
// Verificar si todos los campos están llenos
if (form.checkValidity()) {
  // Detener el comportamiento predeterminado del navegador
  event.preventDefault();

  // Mostrar el mensaje de lleno
  // mensajeLleno.style.display = 'block';
  // swal("Datos guardados con exito!")
  // .then((value) => {
  // swal('Actualizaremos la pagina.');
  // setTimeout(()=>{
  //     location.reload();
  // }, 3000);
  // });

  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de guardar?',
      text: "No podrás hacer un cambio luego de guardar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí!',
      cancelButtonText: 'No quiero!',
      reverseButtons: true
      }).then((result) => {
      if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
          'Guardado!',
          'El nuevo registro ha sido almacenado!',
          'success'
          )
          let timerInterval
          Swal.fire({
          title: 'Guardando nuevo registro!',
          html: 'Faltan <b></b> milisegundos.',
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
              }, 100)
          },
          willClose: () => {
              clearInterval(timerInterval)
              location.reload();
          }
          }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
          }
          })

      } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
      ) {
          swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu registro no ha sido guardado ;)',
          'error'
          )
      }
      })
}
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
  .forEach(function (form) {
  form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      
      }

      form.classList.add('was-validated')
  }, false)
  })
})()