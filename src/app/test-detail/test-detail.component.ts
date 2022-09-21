import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../test';
import { TestService } from '../test.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css'],
})
export class TestDetailComponent implements OnInit {
  test: Test | undefined;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.testService.getTest(id).subscribe((test) => (this.test = test));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.test) {
      this.testService.updateTest(this.test).subscribe(() => this.goBack());
    }
  }
}
