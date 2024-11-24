# Interactive Chat Project

This project implements an interactive chat application using React, TypeScript, and TailwindCSS.

The main goal is to provide a modular and scalable architecture.

## Premises

- No component library such as Material-UI or Chakra-UI has been used to demonstrate the ability to implement custom components and styling with TailwindCSS.

- TypeScript has been used to ensure code consistency and quality.

- A state management library like Redux or Recoil has not been introduced as it is not necessary, and the aim was to keep the project simple.

- Axios or React Query has not been used for HTTP requests as it is unnecessary, and the native `fetch` API has been chosen instead.

- An animation library like Framer Motion has been used to add animations to the application.

## How to Start the Project

1. **Clone the repository:**

   ```bash
   git clone <REPOSITORY_URL>
   cd <PROJECT_NAME>
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed (version 16 or higher).

   ```bash
   npm install
   ```

3. **Start the development environment:**

   ```bash
   npm run dev
   ```

4. **Build the project for production:**

   ```bash
   npm run build
   ```

5. **Run tests:**

   ```bash
   npm run test
   ```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Generates an optimized production build.
- `npm run test`: Runs unit tests with Vitest.
- `npm run lint`: Analyzes the code with ESLint to ensure best practices.
- `npm run preview`: Serves the built application.
- `npm run type-check`: Checks TypeScript types.

## Folder Structure

- `src/components`: Reusable application components (e.g., `ChatBox`, `Message`).
- `src/containers`: High-level components that group business logic and presentation.
- `src/hooks`: Custom hooks for shared logic.
- `src/services`: Logic to interact with external APIs.
- `src/types`: TypeScript definitions.
- `public`: Public assets like images.

## Architecture

The project follows a **modular component-based architecture**:

- Each component has its own test file to ensure individual functionality.
- Containers group components and manage the main application logic.
- Hooks allow logic reuse across different components.
- The service centralizes interactions with external APIs to maintain separation of concerns.

- **Composition and Modularity**
  The separation into directories such as `components`, `containers`, `hooks`, and `services` demonstrates a clear focus on modularity.

  This approach facilitates component reuse, specific logic unit testing, project scalability, and code maintenance by reducing coupling between parts and enabling component reuse in different contexts.

- **Container-Component Pattern**

  The separation of responsibilities between `ChatContainer.tsx` and individual components such as `ChatBox` and `Message` clearly divides business logic from visual representation. Containers manage business logic, such as service interactions and state handling, while components focus on visual representation and receive data through props.

  - Improves code readability and reuse.
  - Simplifies unit testing by separating presentation logic from business logic.

- **Custom Hooks**

  The file `useEffectOnces.tsx` encapsulates reusable logic that might otherwise be repeated in several places.

  - Avoids code duplication by centralizing common behaviors.
  - Improves abstraction of complex logic in React applications.

- **Dependency Inversion Pattern**

  The use of a service file (`chatService.ts`) centralizes API calls.

  - Facilitates testing by allowing services to be mocked in tests.
  - Decouples components and containers from API implementation details.

- **Use of TypeScript Types**

  A `types` directory centralizes type definitions, ensuring consistency throughout the project.

  - Enhances project scalability and error detection at compile time.
  - Facilitates collaboration by providing clear definitions for data and services.

## Best Practices Applied

- **TypeScript:** The entire project uses types to prevent compile-time errors.
- **Testing:** Unit tests for components, hooks, and services using Vitest.
- **ESLint:** Strict configuration to maintain code quality.
- **TailwindCSS:** Fast and consistent styling without additional CSS.
- **Modularity:** Clear separation between components, containers, and business logic.

## Future Improvements

- **End-to-End (E2E) Tests:** Implement E2E tests using tools like Playwright or Cypress to validate complete user flows.

- **Visual Regression Testing:** Add visual regression tests with tools like Percy, Chromatic, or directly using third-party libraries without relying on external services to avoid design errors with future changes.

- **Expanded Documentation:** Include usage examples for each component. For this, Storybook could be added to document and visualize components.
