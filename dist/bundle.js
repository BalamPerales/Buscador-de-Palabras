/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
() {

eval("{document.addEventListener('DOMContentLoaded', () => {\n  const inputPalabra = document.getElementById('texto');\n  const inputTexto = document.getElementById('textoEvaluar');\n  const btnProcesar = document.getElementById('btn-procesar');\n  const btnLimpiar = document.getElementById('btn-limpiar');\n  const seccionResultados = document.getElementById('seccion-resultados');\n  const conteoPalabras = document.getElementById('conteo-palabras');\n  const textoProcesado = document.getElementById('texto-procesado');\n\n  // Validar que sólo use una palabra, no permitimos que use el espacio\n  inputPalabra.addEventListener('input', e => {\n    e.target.value = e.target.value.replace(/\\s+/g, '');\n  });\n\n  // Validamos que no haya vacíos\n  btnProcesar.addEventListener('click', () => {\n    const palabra = inputPalabra.value.trim().toLowerCase();\n    const textoBase = inputTexto.value.trim();\n    if (!palabra || !textoBase) {\n      return Swal.fire({\n        icon: 'error',\n        title: 'Campos vacíos',\n        text: 'Por favor, ingresa un texto y la palabra que deseas buscar.',\n        confirmButtonColor: '#dc3545'\n      });\n    }\n\n    // Separamos el texto base por espacios en un arreglo\n    const palabrasDelTexto = textoBase.split(' ');\n\n    // Cuando coincida le agregamos la etiqueta mark para que resalte\n    const textoModificado = palabrasDelTexto.map(item => item.toLowerCase() === palabra ? `<mark class=\"bg-warning rounded px-1\">${item}</mark>` : item);\n\n    // Contamos las coincidencias filtrando los elementos que ahora contienen la etiqueta mark\n    const ocurrencias = textoModificado.filter(item => item.includes('<mark')).length;\n    const hayCoincidencias = ocurrencias > 0;\n\n    // Actualizamos la parte del html en la que se muestran las coincidencias\n    seccionResultados.style.display = hayCoincidencias ? 'block' : 'none';\n    conteoPalabras.textContent = hayCoincidencias ? ocurrencias : '0';\n\n    // Unimos el arreglo de nuevo en un solo texto separado por espacios\n    textoProcesado.innerHTML = hayCoincidencias ? textoModificado.join(' ') : '';\n\n    // Si hay coincidencias\n    Swal.fire(hayCoincidencias ? {\n      icon: 'success',\n      title: 'Búsqueda completada',\n      text: `La palabra se encontró ${ocurrencias} veces`,\n      confirmButtonColor: '#0d6efd'\n    } : {\n      icon: 'info',\n      title: 'Sin coincidencia',\n      text: 'La palabra no está en el texto',\n      confirmButtonColor: '#0dcaf0'\n    });\n  });\n\n  // Limpiar la pantalla sin recargar, simplemente mandamos los valores vacíos\n  btnLimpiar.addEventListener('click', () => {\n    inputPalabra.value = '';\n    inputTexto.value = '';\n    seccionResultados.style.display = 'none';\n    conteoPalabras.textContent = '0';\n    textoProcesado.innerHTML = '';\n    Swal.fire({\n      icon: 'success',\n      title: 'Pantalla limpia',\n      toast: true,\n      position: 'top-end',\n      showConfirmButton: false,\n      timer: 1500\n    });\n  });\n});\n\n//# sourceURL=webpack://buscador-de-palabras/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;