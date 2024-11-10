import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule
import { NewsletterService } from "../services/newsletter.service";

@Component({
  selector: "app-email-management",
  templateUrl: "./email-management.component.html",
  styleUrls: ["./email-management.component.css"],
  standalone: true, // Mark as standalone component
  imports: [CommonModule], // Add CommonModule to imports
})
export class EmailManagementComponent implements OnInit {
  subscribers: { email: string }[] = [];

  constructor(private newsletterService: NewsletterService) {}

  ngOnInit(): void {
    this.newsletterService.getSubscribers().subscribe({
      next: (subscribers) => (this.subscribers = subscribers),
      error: () => alert("Failed to load subscribers."),
    });
  }

  removeSubscriber(email: string) {
    this.newsletterService.removeSubscriber(email).subscribe({
      next: () =>
        (this.subscribers = this.subscribers.filter(
          (sub) => sub.email !== email,
        )),
      error: () => alert("Failed to remove subscriber."),
    });
  }
}
