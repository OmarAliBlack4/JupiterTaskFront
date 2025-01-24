  import { Component } from '@angular/core';
  import { AdminScoreService } from '../services/admin-score.service';

  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent {
    newTeamId: number | null = null; 
    newScores: { [teamId: number]: number } = {}; 

  constructor(private adminScoreService: AdminScoreService) { }

  updateScore() {
    if (this.newTeamId != null) {
    const scoreData = {
      value: this.newScores[this.newTeamId ?? 0] 
      };
    this.adminScoreService.updateScore(this.newTeamId, scoreData).subscribe(
        (response) => {
        console.log(`Score for team ${this.newTeamId} updated:`, response);
          this.newScores[this.newTeamId ?? 0 ] = 0;
          alert(`Score for team ${this.newTeamId} updated successfully!`); 
        },
        (error) => {
      console.error(`Error updating score for team ${this.newTeamId}:`, error);
      alert(`Error updating score for team ${this.newTeamId}!`); 
  
        }
    );
  }
}
  
  resetScore() {
    if (this.newTeamId != null) {
        this.adminScoreService.resetScore(this.newTeamId).subscribe(
          (response) => {
          console.log(`Score for team ${this.newTeamId} reset:`, response);
          alert(`Score for team ${this.newTeamId} reset successfully!`); 
        },
        (error) => {
        console.error(`Error resetting score for team ${this.newTeamId}:`, error);
        alert(`Error resetting score for team ${this.newTeamId}!`);
        }
      );
      }
    }
  }