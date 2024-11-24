# Proyecto de Chat Interactivo

Este proyecto implementa una aplicación de chat interactivo utilizando React, TypeScript y TailwindCSS.

El objetivo principal es proporcionar una arquitectura modular y escalable.

## Premisas

- No se ha utilizado ninguna librería de componentes como Material-UI o Chakra-UI para demostrar la capacidad de implementar componentes personalizados y estilización con TailwindCSS.

- Se ha utilizado TypeScript para garantizar la consistencia y calidad del código.

- No se ha querido introducir una librería de estado como Redux o Recoil ya que no es necesaria y quería mantener la simplicidad del proyecto.

- No se ha usado axios o react query para las peticiones HTTP ya que no es necesario y se ha optado por fetch que es nativo en el navegador.

- Se ha usado una librería de animaciones como Framer Motion para añadir animaciones a la aplicación.

## Cómo arrancar el proyecto

1. **Clonar el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. **Instalar las dependencias:**
   Asegúrate de tener Node.js instalado (versión 16 o superior).

   ```bash
   npm install
   ```

3. **Iniciar el entorno de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Construir el proyecto para producción:**

   ```bash
   npm run build
   ```

5. **Ejecutar los tests:**
   ```bash
   npm run test
   ```

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run test`: Ejecuta los tests unitarios con Vitest.
- `npm run lint`: Analiza el código con ESLint para asegurar buenas prácticas.
- `npm run preview`: Sirve la aplicación ya construida.
- `npm run type-check`: Comprueba los tipos con TypeScript.

## Estructura de carpetas

- `src/components`: Componentes reutilizables de la aplicación (como `ChatBox`, `Message`).
- `src/containers`: Componentes de alto nivel que agrupan lógica de negocio y presentación.
- `src/hooks`: Hooks personalizados para lógica compartida.
- `src/services`: Lógica para interactuar con APIs externas.
- `src/types`: Tipos y definiciones para TypeScript.
- `public`: Recursos públicos como imágenes.

## Arquitectura

El proyecto sigue una arquitectura basada en **componentes modulares**:

- Cada componente tiene su propio archivo de test para asegurar funcionalidad individual.
- Los contenedores agrupan componentes y manejan la lógica principal de la aplicación.
- Los hooks permiten reutilizar lógica entre diferentes componentes.
- El servicio centraliza las interacciones con APIs externas para mantener la separación de responsabilidades.

- Composición y Modularidad
  La separación en directorios como components, containers, hooks, y services demuestra un enfoque claro hacia la modularidad.

  Este enfoque facilita la reutilización de componentes, la prueba unitaria de lógica específica, la escalabilidad del proyecto y el mantenimiento del código al reducir el acoplamiento entre las partes y la reutilización componentes en diferentes contextos.

- Patrón Contenedor-Componente

  La separación de responsabilidades entre `ChatContainer.tsx` y los componentes individuales como ChatBox y Message divide claramente la lógica de negocio de la representación visual, de tal forma que tendremos los contenedores (container) que gestionan la lógica de negocio, como la interacción con servicios y el manejo de estados, mientras que los componentes (components) se centran en la representación visual y reciben datos a través de props.

  - Mejora la legibilidad y reutilización del código.
  - Simplifica las pruebas unitarias al separar la lógica de presentación de la lógica de negocio.

- Hooks Personalizados (Custom Hooks)

  El archivo useEffectOnces.tsx encapsula lógica reutilizable que se podría repetir en varios lugares.

  - Evita duplicación de código al centralizar comportamientos comunes.
  - Mejora la abstracción de lógica compleja en aplicaciones React.

- Patrón de Inversión de Dependencias

  El uso de un archivo de servicio (chatService.ts) centraliza las llamadas a APIs.

  - Facilita el testeo al permitir el mockeo de servicios en las pruebas.
  - Desacopla los componentes y contenedores del detalle de las implementaciones del API.

- Uso de Tipos de TypeScript

  He creado un directorio types donde centralizo las definiciones de tipos y así garantizar la consistencia en todo el proyecto.

  - Mejora la escalabilidad del proyecto y la detección de errores en tiempo de compilación.
  - Facilita la colaboración al proveer definiciones claras para los datos y servicios.

## Buenas prácticas aplicadas

- **TypeScript**: Todo el proyecto utiliza tipos para prevenir errores en tiempo de compilación.
- **Testing**: Tests unitarios para componentes, hooks y servicios utilizando Vitest.
- **ESLint**: Configuración estricta para mantener calidad de código.
- **TailwindCSS**: Estilización rápida y consistente sin necesidad de CSS adicionales.
- **Modularidad**: Separación clara entre componentes, contenedores, y lógica de negocio.

## Mejoras futuras

- **Tests End-to-End (E2E):** Implementar pruebas E2E utilizando herramientas como Playwright o Cypress para validar flujos completos de usuario.

- **Regresión visual:** Añadir tests de regresión visual con herramientas como Percy , Chromatic o directamente usando librerías de tercero sin contar con un servicio de terceros para evitar errores en el diseño con cambios futuros.

- **Documentación ampliada:** Incluir ejemplos de uso para cada componente. Para esto podríamos añadir Storybook para documentar y visualizar componentes.
