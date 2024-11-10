import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { EmailService } from "../services/email.service";
import { CommonModule } from "@angular/common"; // Ensure you import CommonModule

@Component({
  selector: "app-email-subscription",
  templateUrl: "./email-subscription.component.html",
  styleUrls: ["./email-subscription.component.css"],
  standalone: true, // Make it standalone
  imports: [CommonModule, ReactiveFormsModule], // Import necessary modules for form handling
})
export class EmailSubscriptionComponent {
  subscriptionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
  ) {
    this.subscriptionForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.subscriptionForm.valid) {
      const email = this.subscriptionForm.get("email")?.value;
      this.emailService.subscribe(email).subscribe({
        next: () =>
          alert("Subscription successful! A confirmation email has been sent."),
        error: () => alert("Subscription failed. Please try again."),
      });
    }
  }
}
