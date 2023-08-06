


const divElement = document.getElementById('btn');
divElement.addEventListener('click', function() {
  alert('Hola! Soy el div');
});

const btnElement = document.getElementById('e');

    btnElement.addEventListener('click', function(event) {
      event.stopPropagation();
      alert('Hola!');
    });