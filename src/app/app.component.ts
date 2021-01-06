
import { Component, OnInit } from '@angular/core';
import { STEP_ITEMS } from './constants/multi-step-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  public isViewable: boolean; 
  showMsg: boolean = false;
  formContent: any;
  formData: any;


  ngOnInit(): void {
    this.formContent = STEP_ITEMS;
    this.formData = {};
    this.isViewable = true;
  }

  public toogleForm(): void { this.isViewable = !this.isViewable; } 

  onFormSubmit(formData: any): void {
    this.formData = formData;
    this.showMsg= true;
  }
}