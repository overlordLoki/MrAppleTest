import { ComponentFixture, TestBed } from "@angular/core/testing";
import AuthComponent from "./auth.component";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { HttpClientTestingModule } from "@angular/common/http/testing"; // Import HttpClientTestingModule
import { of } from "rxjs";

describe("AuthComponent", () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AuthComponent,
        RouterModule.forRoot([]),
        HttpClientTestingModule, // Add HttpClientTestingModule here
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              url: [{ path: "login" }],
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize authType and title", () => {
    expect(component.authType).toBe("login");
    expect(component.title).toBe("Sign in");
  });
});
