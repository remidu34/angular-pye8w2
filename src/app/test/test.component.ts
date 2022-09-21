import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  tests: Test[] = [];
  constructor(private testServices: TestService) {}

  ngOnInit(): void {
    this.getTests();
  }
  getTests(): void {
    this.testServices
      .getTests()
      .subscribe((test) => (this.tests = test.slice(1, 5)));
  }
}
