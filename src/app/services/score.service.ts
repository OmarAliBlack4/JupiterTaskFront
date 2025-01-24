import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Score {
  teamName: string;
  categoryId: number;
  scores: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private apiUrl = 'https://localhost:7045/api/Scores'; //my local api

  constructor(private http: HttpClient) { }

  getScoresByCategory(categoryId: number): Observable<Score[]> {
    return this.http.get<Score[]>(`${this.apiUrl}/category/${categoryId}`);
  }
}