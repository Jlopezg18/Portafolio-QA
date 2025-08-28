# QA Automation Framework - Cypress & TypeScript

Este es un proyecto de automatización de pruebas end-to-end (E2E) robusto, creado para demostrar mi capacidad de diseñar, construir y mantener un framework de pruebas.

### 🚀 Tecnologías y Herramientas

* **Lenguaje:** TypeScript
* **Framework de E2E:** Cypress
* **Automatización CI/CD:** GitHub Actions

 Casos de Prueba Automatizados

El proyecto incluye la automatización de los siguientes flujos críticos en el sitio web de demostración `https://www.demoblaze.com/`:

Flujo de Usuario E2E:
    * Iniciar sesión con credenciales válidas.
    * Navegar al catálogo de productos.
    * Seleccionar un producto y añadirlo al carrito.
    * Completar el proceso de compra.
    * Validar el mensaje de confirmación de compra.

### ⚙️ Pipeline de Integración Continua (CI/CD)

El proyecto está integrado con **GitHub Actions**. Cada vez que se sube un nuevo cambio al repositorio, el flujo de trabajo (`ci.yml`) se ejecuta automáticamente, garantizando que todos los tests pasen antes de que cualquier cambio sea considerado "seguro".



Reporte de Errores (Ejemplo)

Durante el desarrollo, he identificado el siguiente error (este es solo un ejemplo para demostrar el proceso de bug reporting):

**Título del Bug:** El campo de "Teléfono" en el formulario de compra acepta caracteres no numéricos.

**Pasos para Reproducir:**
1.  Navegar a la página de compra.
2.  Ingresar cualquier letra en el campo "Phone".
3.  El sistema acepta el valor en lugar de mostrar un error de validación.

**Comportamiento Esperado:** El campo solo debería aceptar caracteres numéricos y no permitir la entrada de letras.
