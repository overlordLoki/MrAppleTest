// src/app/services/mock-user.service.ts
import { Injectable } from "@angular/core";
import { of } from "rxjs"; // Import 'of' to return observable values

@Injectable({
  providedIn: "root",
})
export class MockUserService {
  // Simulate logged-in status, you can toggle this to test both cases
  isAuthenticated = of(true); // Change to 'false' to simulate a logged-out user

  // Mock user details
  currentUser = of({ username: "testuser", image: "path_to_image" });
}
