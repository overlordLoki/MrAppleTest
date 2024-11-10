import { Component, inject } from "@angular/core";
import { UserService } from "../auth/services/user.service";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";
import { IfAuthenticatedDirective } from "../auth/if-authenticated.directive";
import { map } from "rxjs/operators"; // Ensure map is imported

@Component({
  selector: "app-layout-header",
  templateUrl: "./header.component.html",
  imports: [
    RouterLinkActive,
    RouterLink,
    AsyncPipe,
    NgIf,
    IfAuthenticatedDirective,
  ],
  standalone: true,
})
export class HeaderComponent {
  currentUser$ = inject(UserService).currentUser; // Inject UserService to access current user
  isAuthenticated$ = this.currentUser$.pipe(map((user) => !!user)); // Check if the user is authenticated
}
