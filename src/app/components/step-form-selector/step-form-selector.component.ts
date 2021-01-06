import { AfterContentChecked, Component } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-step-form-selector',
  templateUrl: './step-form-selector.component.html',
  styleUrls: ['./step-form-selector.component.css']
})
export class StepFormSelectorComponent implements AfterContentChecked {

  currentStepIndex: number;
  stepItems: Array<any>;

  constructor(private sharedService: SharedService) {}

  ngAfterContentChecked() {
    this.currentStepIndex = this.sharedService.currentStepIndex;
    this.stepItems = this.sharedService.stepItems;
  }
}