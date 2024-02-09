/*Para el contador de caracteres*/
        document.addEventListener("DOMContentLoaded", function () {
            var mensajeTextarea = document.getElementById("mensaje");
            var contadorCaracteres = document.getElementById("contadorCaracteres");

            mensajeTextarea.addEventListener("input", function () {
                var caracteresRestantes = 500 - mensajeTextarea.value.replace(/\r?\n/g, "").length;
                contadorCaracteres.innerHTML="Carácteres restantes: " + caracteresRestantes;
            });
        });
        function inicio() {
            document.getElementById("cursos").addEventListener("change", crearElemento);
            document.getElementById("crearNuevo").addEventListener("click", function () {crearNuevo("cursos", "texto");});
        }

        function crearElemento() {
            var cuadroTexto = document.getElementById("texto");
            var botonCrearNuevo = document.getElementById("crearNuevo");

            cuadroTexto.style.display = this.value === "anadirNuevo" ? "block" : "none";
            botonCrearNuevo.style.display =this.value === "anadirNuevo" ? "block" : "none";
        }

        function crearNuevo(idSelect, idTexto) {
            var nuevoTexto = document.getElementById(idTexto).value;
            var select = document.getElementById(idSelect);

            if (nuevoTexto.trim() !== "") {
                var nuevaFecha = document.createElement("option");
                nuevaFecha.value = nuevoTexto;
                nuevaFecha.textContent = nuevoTexto;

                var opciones = select.options;
                for (var i = 0; i < opciones.length; i++) {
                    if (nuevoTexto < opciones[i].value) {
                        select.insertBefore(nuevaFecha, opciones[i]);
                        break;
                    }
                }

                if (i === opciones.length) {
                    select.appendChild(nuevaFecha);
                }
            }

            document.getElementById(idTexto).value = "";
            document.getElementById(idSelect).value = "anadirNuevo";
            crearElemento();
        }

        function seleccionarTodos() {
            var checkboxes = document.querySelectorAll('input[name="dias"]');
            var seleccionarTodosCheckbox = document.getElementById("todos");

            checkboxes.forEach(function (checkbox) {
                checkbox.checked = seleccionarTodosCheckbox.checked;
            });
        }

        function validarFormulario() {
            var nombre = document.getElementById("nombre").value;
            var nif = document.getElementById("nif").value;
            var mensaje = document.getElementById("mensaje").value;
            var fechaMatriculacion =document.getElementById("fechaMatriculacion").value;

            if (
                nombre.trim() === "" ||nif.trim() === "" ||mensaje.trim() === "" ||fechaMatriculacion.trim() === "") {
                alert("Ningún elemento puede estar vacío.");
                return false;
            }

            var diasSeleccionados = document.querySelectorAll('input[name="dias"]:checked').length;
            if (diasSeleccionados < 2) {
                alert("Seleccione al menos dos días.");
                return false;
            }

            if (mensaje.length < 2 || mensaje.length > 500) {
                alert("El mensaje debe tener entre 2 y 500 caracteres.");
                return false;
            }

            return true;
        }

        function clickGoogle() {
            window.location.href = "https://www.google.com";
        }