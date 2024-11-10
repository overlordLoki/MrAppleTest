import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { of, throwError } from "rxjs";
import { EmailSubscriptionComponent } from "./email-subscription.component";
import { EmailService } from "../services/email.service";
import { CommonModule } from "@angular/common"; // Import CommonModule

class MockEmailService {
  subscribe(email: string) {
    return of(void 0); // Simulate a successful subscription
  }
}

describe("EmailSubscriptionComponent", () => {
  let component: EmailSubscriptionComponent;
  let fixture: ComponentFixture<EmailSubscriptionComponent>;
  let emailService: EmailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CommonModule, EmailSubscriptionComponent], // Import standalone component here
      providers: [{ provide: EmailService, useClass: MockEmailService }],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailSubscriptionComponent);
    component = fixture.componentInstance;
    emailService = TestBed.inject(EmailService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should subscribe when form is valid", () => {
    const email = "test@example.com";
    component.subscriptionForm.setValue({ email }); // Set form value to simulate valid input

    spyOn(emailService, "subscribe").and.callThrough(); // Spy on the subscribe method

    component.onSubmit(); // Call onSubmit to trigger subscription

    expect(emailService.subscribe).toHaveBeenCalledWith(email); // Check if subscribe was called with correct email
  });

  it("should not subscribe when form is invalid", () => {
    component.subscriptionForm.setValue({ email: "" }); // Set invalid form value

    spyOn(emailService, "subscribe").and.callThrough(); // Spy on the subscribe method

    component.onSubmit(); // Call onSubmit

    expect(emailService.subscribe).not.toHaveBeenCalled(); // Ensure subscribe was not called
  });
});
