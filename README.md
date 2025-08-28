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

# My Cypress Project

This project is a Cypress-based end-to-end testing framework designed to validate the login functionality of a web application. It includes tests that ensure the application behaves as expected when users attempt to log in.

## Project Structure

```
my-cypress-project
├── cypress
│   └── e2e
│       └── login.cy.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

Ensure you have the following installed:

- Node.js (version 12 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd my-cypress-project
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running Tests

To run the Cypress tests, use the following command:

```
npx cypress open
```

This will open the Cypress Test Runner, where you can select and run the tests.

### Writing Tests

Tests are located in the `cypress/e2e/` directory. You can create new test files or modify existing ones to add more test cases.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
 5acd2b0 (Initial QA multi-stack project)
