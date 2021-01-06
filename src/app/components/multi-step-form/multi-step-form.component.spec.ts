import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiStepFormComponent } from './multi-step-form.component';
import { SharedService } from "src/app/service/shared.service";
import { FormBuilder } from '@angular/forms';

describe('MultiStepFormComponent', () => {
  let component: MultiStepFormComponent;
  let fixture: ComponentFixture<MultiStepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiStepFormComponent ],
      providers: [ SharedService, FormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
