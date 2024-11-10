## Angular test

Link to the deployed application: [Realworld App](https://mr-apple-test-git-main-tymons-projects-e277ddeb.vercel.app/)
Link to the GitHub repository: [Realworld Fork](https://github.com/overlordLoki/MrAppleTest?tab=readme-ov-file)

### Section 1: basic skills

1. **Unexpected Behavior and Bugs**:

   - The backend API isn't available, which prevents features like authentication and content fetching from functioning as intended. This is a limitation because it impacts the app’s core functionality, and the documentation doesn’t clearly guide how to set up the API locally or reference a pre-deployed backend.
   - Additionally, the landing page defaults to the Global Feed, which may not be ideal for a user-authenticated app. Starting with a login page could be more intuitive, as it aligns with user expectations for apps where authentication is required to access most features.

2. **Architecture Observations**:

   - **Frontend-Backend Dependency**: The application's dependency on a backend for core features, like login and feeds, suggests an area for potential improvement. An alternative approach could involve displaying a fallback or limited-access view when the backend is unavailable.
   - **Component Structure and Routing**: The app’s modular structure, with distinct components and modules, appears well-organized. However, some areas might benefit from further separation of concerns to improve maintainability.
   - **State Management**: NgRx is used here, which is a best practice for managing complex state in larger applications. Although it’s an excellent choice for scalability, simpler state management could be sufficient for an app of this size and reduce overhead.

3. **Choice of Tools**:

   - GitHub was ideal as it allowed me to fork the original repository rather than clone it, preserving the project’s history and structure. This approach also simplifies tracking and managing changes, making it easier to contribute back if needed.
   - Vercel was chosen for deployment due to its free hosting, seamless integration with GitHub, and continuous deployment support. It works well for frontend projects, allowing me to deploy quickly without complicated configurations.

4. **Tool Limitations**:
   - A limitation with Vercel is that it primarily supports frontend hosting. Without backend support for the API, the application’s functionality is limited. In a production scenario, a hosting service that accommodates both frontend and backend needs, or a separate deployment for the backend, could be a better choice.

---

### Section 2: writing tests (forty minutes)

#### Testing Framework Choice and Strategy

**Chosen Framework**: **Jasmine and Karma**

- Jasmine is a widely used testing framework for Angular, known for its ease of use and seamless integration with Angular projects.
- Karma acts as a test runner that executes tests in real browsers, providing robust feedback on test reliability in an environment similar to production.

**Benefits and Trade-offs**:

- _Benefits_: Jasmine with Karma is well-documented, making it easy to set up, write, and run tests. It supports various testing types (unit, integration, and UI tests) and provides excellent compatibility with Angular.
- _Trade-offs_: This setup can be slower when running a large number of tests, as Karma spins up browsers. For small projects, however, the time impact is minimal.

#### Testing Strategy

Given the limited time, we’ll focus on high-value areas that would likely impact user experience if they regress:

1. **Login Component**: Ensures authentication works, a core feature for any user interaction.
2. **Article Component**: Tests loading and rendering an article correctly, as reading articles is central to the app.
3. **Global Feed Component**: Confirms that users see the global feed as expected.
4. **Profile Page**: Verifies user profile information is displayed correctly.
5. **Settings Page**: Ensures the user can access settings, as it affects account management.

---

### Section 3: adding a feature (one to two hours)

#### Front-End Development Without an Existing Backend

**1. Mock Data and Services**:  
I used mock data and service stubs to simulate API calls, ensuring the frontend worked independently. Components were designed to handle different states (loading, error, success) without requiring backend integration.

**2. Modular Components**:  
The frontend was developed with reusable, modular components, which ensures flexibility when integrating the backend later.

**3. UI/UX Independence**:  
Design decisions focused on keeping the UI decoupled from backend specifics, making it easy to integrate the real API once available.

**4. Front-End Routing**:  
Angular's routing allowed smooth transitions between pages (e.g., login, feed, settings) and ensured a functional UI even without backend integration.

#### Catching Regressions

**1. Automated Tests**:  
Unit and integration tests were written for critical components like login, feed, and settings to catch regressions during updates.

**2. CI Pipeline**:  
I configured GitHub Actions to run tests on every push, ensuring early detection of issues.

**3. Manual Testing**:  
Manual testing on the deployed app helped catch UI issues not covered by automated tests.

#### Assumptions and Spec

Without a detailed spec, I assumed core features like authentication, content feeds, and profile management were necessary. I focused on making components flexible and ready for backend integration when it becomes available.
