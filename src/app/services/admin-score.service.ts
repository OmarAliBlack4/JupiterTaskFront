  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';

  interface TeamScore {
    teamId: number;
    scores: { [categoryId: number]: number }; 
  }

  @Injectable({
    providedIn: 'root'
  })
  export class AdminScoreService {
    private apiUrl = 'https://localhost:7045/api/AdminScores';  //my local api

    constructor(private http: HttpClient) { }

    updateScore(teamId: number, scoreData: any): Observable<any> {
          const token = localStorage.getItem('token'); 
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}` 
            });
      console.log('Sending Update Request for team ID:', teamId, 'with data:', scoreData);
      return this.http.put(`${this.apiUrl}/update-score/${teamId}`, scoreData,{headers});
    }

    resetScore(teamId: number): Observable<any> {
          const token = localStorage.getItem('token'); 
          const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}` 
            });
      console.log('Sending Reset Request for team ID:', teamId);
      return this.http.put(`${this.apiUrl}/reset-score/${teamId}`, {},{headers});
    }
    getTeamScores(teamId: number): Observable<TeamScore> {
          const token = localStorage.getItem('token'); 
          const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`
            });
      return this.http.get<TeamScore>(`${this.apiUrl}/team/${teamId}/scores`,{headers});
    }
  }