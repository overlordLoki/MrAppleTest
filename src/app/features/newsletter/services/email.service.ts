import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private apiUrl = "https://your-api-url.com/subscriptions";

  constructor(private http: HttpClient) {}

  subscribe(email: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/subscribe`, { email });
  }
}
