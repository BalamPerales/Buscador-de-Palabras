document.addEventListener('DOMContentLoaded', () => {
    const inputPalabra = document.getElementById('texto');
    const inputTexto = document.getElementById('textoEvaluar');
    const btnProcesar = document.getElementById('btn-procesar');
    const btnLimpiar = document.getElementById('btn-limpiar');
    
    const seccionResultados = document.getElementById('seccion-resultados');
    const conteoPalabras = document.getElementById('conteo-palabras');
    const textoProcesado = document.getElementById('texto-procesado');

    // Validar que sólo use una palabra, no permitimos que use el espacio
    inputPalabra.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\s+/g, '');
    });

    // Validamos que no haya vacíos
    btnProcesar.addEventListener('click', () => {
        const palabra = inputPalabra.value.trim().toLowerCase();
        const textoBase = inputTexto.value.trim();

        if (!palabra || !textoBase) {
            return Swal.fire({
                icon: 'error',
                title: 'Campos vacíos',
                text: 'Por favor, ingresa un texto y la palabra que deseas buscar.',
                confirmButtonColor: '#dc3545'
            });
        }

        // Separamos el texto base por espacios en un arreglo
        const palabrasDelTexto = textoBase.split(' ');

        // Cuando coincida le agregamos la etiqueta mark para que resalte
        const textoModificado = palabrasDelTexto.map(item => 
            item.toLowerCase() === palabra  ? `<mark class="bg-warning rounded px-1">${item}</mark>`  : item
        );

        // Contamos las coincidencias filtrando los elementos que ahora contienen la etiqueta mark
        const ocurrencias = textoModificado.filter(item => item.includes('<mark')).length;
        const hayCoincidencias = ocurrencias > 0;

        // Actualizamos la parte del html en la que se muestran las coincidencias
        seccionResultados.style.display = hayCoincidencias ? 'block' : 'none';
        conteoPalabras.textContent = hayCoincidencias ? ocurrencias : '0';
        
        // Unimos el arreglo de nuevo en un solo texto separado por espacios
        textoProcesado.innerHTML = hayCoincidencias ? textoModificado.join(' ') : '';

        // Si hay coincidencias
        Swal.fire(
            hayCoincidencias ? { 
                    icon: 'success', 
                    title: 'Búsqueda completada', 
                    text: `La palabra se encontró ${ocurrencias} veces`, 
                    confirmButtonColor: '#0d6efd' 
                  } : { 
                    icon: 'info', 
                    title: 'Sin coincidencia', 
                    text: 'La palabra no está en el texto', 
                    confirmButtonColor: '#0dcaf0' 
                  }
        );
    });

    // Limpiar la pantalla sin recargar, simplemente mandamos los valores vacíos
    btnLimpiar.addEventListener('click', () => {
        inputPalabra.value = '';
        inputTexto.value = '';
        seccionResultados.style.display = 'none';
        conteoPalabras.textContent = '0';
        textoProcesado.innerHTML = '';

        Swal.fire({
            icon: 'success',
            title: 'Pantalla limpia',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
        });
    });
});