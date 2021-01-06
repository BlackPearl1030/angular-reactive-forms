import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedService {
  currentStepIndex: number;
  _currentStepIndexBS = new BehaviorSubject<number>(0);
  stepItems: Array<any>;
  _stepItemsBS = new BehaviorSubject([]);

  constructor() {
    this.currentStepIndex;
    this._currentStepIndexBS.next(this.currentStepIndex);
    this.stepItems;
    this._stepItemsBS.next(this.stepItems);
  }

  updatecurrentStepIndex(value) {
    this.currentStepIndex = value;
    this._currentStepIndexBS.next(this.currentStepIndex);
  }

  getStepItems(value: Array<any>) {
    this.stepItems = value;
    this._stepItemsBS.next(this.stepItems);
  }
}