import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepFormSelectorComponent } from './step-form-selector.component';
import { SharedService } from "src/app/service/shared.service";

describe('StepFormSelectorComponent', () => {
  let component: StepFormSelectorComponent;
  let fixture: ComponentFixture<StepFormSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFormSelectorComponent ],
      providers: [ SharedService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFormSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
