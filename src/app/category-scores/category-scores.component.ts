import { ScoreService } from './../services/score.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category-scores',
  templateUrl: './category-scores.component.html',
  styleUrls: ['./category-scores.component.css']
})
export class CategoryScoresComponent implements OnInit {
  categoryId: number = 0;
  scores: any[] = [];

  constructor(private route: ActivatedRoute, private ScoreService: ScoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = +params['id'];
      this.loadScores();
    });
  }

  loadScores() {
    this.ScoreService.getScoresByCategory(this.categoryId).subscribe(
      (scores) => {
        this.scores = scores;
      },
      (error) => {
        console.error('Error loading scores:', error);
      }
    );
  }
}