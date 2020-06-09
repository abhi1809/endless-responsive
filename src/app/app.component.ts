import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'endless';
  steps;

  constructor(private appService: AppService) {}
  
  ngOnInit() {
    this.appService.getSteps().subscribe((stepsData) => {
      this.modifySteps(stepsData);
    });
  }

  modifySteps(stepsData) {
    this.steps = stepsData.map(obj => {
      let latestContent = obj.versionContent.reduce((a, b) => {return new Date(a.effectiveDate) > new Date(b.effectiveDate) ? a : b;})
      obj.versionContent = latestContent;
      return obj;
    })
    this.steps.sort((a, b) => Number(a.stepNumber) - Number(b.stepNumber));
    console.log(this.steps)
  }

}
