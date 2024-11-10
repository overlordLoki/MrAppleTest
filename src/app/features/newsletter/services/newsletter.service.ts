import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewsletterService {
  private apiUrl = "https://your-api-url.com/subscriptions";

  constructor(private http: HttpClient) {}

  getSubscribers(): Observable<{ email: string }[]> {
    return this.http.get<{ email: string }[]>(`${this.apiUrl}`);
  }

  removeSubscriber(email: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${email}`);
  }
}
