// src/app/features/newsletter/email-management/email-management.component.spec.ts
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EmailManagementComponent } from "./email-management.component"; // Import the standalone component
import { MockUserService } from "../../../services/mock-user.service"; // Import the mock service
import { CommonModule } from "@angular/common"; // CommonModule for ngFor
import { NewsletterService } from "../services/newsletter.service"; // Mocked NewsletterService
import { of } from "rxjs";

describe("EmailManagementComponent", () => {
  let component: EmailManagementComponent;
  let fixture: ComponentFixture<EmailManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailManagementComponent, CommonModule], // Import standalone component here
      providers: [
        { provide: MockUserService, useClass: MockUserService }, // Provide the mock user service
        {
          provide: NewsletterService, // Mock the actual NewsletterService
          useValue: {
            getSubscribers: () => of([{ email: "user@example.com" }]), // Mock response for subscribers
            removeSubscriber: (email: string) => of(true), // Mock remove subscriber
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailManagementComponent); // Create the component instance
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detect changes to initialize component
  });

  it("should display the subscriber list", () => {
    const subscriberElement = fixture.nativeElement.querySelector("li");
    expect(subscriberElement).toBeTruthy(); // Ensure a list item is present
    expect(subscriberElement.textContent).toContain("user@example.com"); // Check that email is displayed
  });

  it("should call removeSubscriber method when remove button is clicked", () => {
    const removeButton = fixture.nativeElement.querySelector("button"); // Find the button
    spyOn(component, "removeSubscriber"); // Spy on the removeSubscriber method
    removeButton.click(); // Simulate a button click
    expect(component.removeSubscriber).toHaveBeenCalledWith("user@example.com"); // Ensure method was called
  });
});
