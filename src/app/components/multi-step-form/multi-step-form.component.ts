import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: "app-multi-step-form",
  templateUrl: "./multi-step-form.component.html",
  styleUrls: ["./multi-step-form.component.css"]
})

export class MultiStepFormComponent implements OnInit {
  @Input() formContent: any;
  @Output() readonly formSubmit: EventEmitter<any> = new EventEmitter<any>();

  activeStepIndex: number;
  currentFormContent: Array<any>;
  formData: any;
  index: number;
  formFields: Array<Array<string>>;
  loanFormFields: Array<string>;
  stepItems: Array<any>;
  loanForm: Array<FormGroup>;
  selectedAnswer: String = '';

  constructor(
    private sharedService: SharedService,
    private readonly _formBuilder: FormBuilder
  ) {
    this.sharedService.currentStepIndex = this.activeStepIndex;
    this.sharedService.stepItems = this.formContent;
  }

  ngOnInit() {
    this.activeStepIndex = 0;
    this.loanForm = [];
    this.currentFormContent = [];
    this.formFields = [];
    this.stepItems = this.formContent;

    this.stepItems.forEach((data, i) => {
      this.currentFormContent.push(this.stepItems[i]["data"]); // data: name, validators, placeholder
      this.formFields.push(Object.keys(this.currentFormContent[i])); // string values for each field
      this.loanForm.push(this.buildForm(this.currentFormContent[i])); //form groups
      
    });
    this.sharedService.updatecurrentStepIndex(this.activeStepIndex);
    this.sharedService.getStepItems(this.stepItems);
  }

  // FormGroups for each form
  buildForm(currentFormContent: any): FormGroup {
    const formDetails = Object.keys(currentFormContent).reduce((obj, key) => {
      obj[key] = ["", this.getValidators(currentFormContent[key])];

      return obj;
    }, {});

    return this._formBuilder.group(formDetails);
  }

  getValidators(formField: any): Validators {
    const fieldValidators = Object.keys(formField.validations).map(
      validator => {
        if (validator === "required") {
          return Validators[validator];
        } else {
          return Validators[validator](formField.validations[validator]);
        }
      }
    );
    return fieldValidators;
  }

  getValidationMessage(formIndex: number, formFieldName: string): string {
    const formErrors = this.loanForm[formIndex].get(formFieldName).errors;
    const errorMessages = this.currentFormContent[formIndex][formFieldName]
      .errors;
    const validationError = errorMessages[Object.keys(formErrors)[0]];

    return validationError;
  }

  goToStep(step: string) {
    this.activeStepIndex =
      step === "prev" ? this.activeStepIndex - 1 : this.activeStepIndex + 1;
    this.setFormPreview();
    this.sharedService.updatecurrentStepIndex(this.activeStepIndex);
  }
  
  onSelecOptionChange(event: any) {
    this.selectedAnswer = event.target.value;
  }

  setFormPreview(): void {
    this.formData = this.loanForm.reduce(
      (loanForm, currentForm) => ({ ...loanForm, ...currentForm.value }),
      {}
    );
    this.loanFormFields = Object.keys(this.formData);
  }

  onFormSubmit(): void {
    this.formSubmit.emit(this.formData);
  }

  trackByFn(): number {
    return this.index;
  }
}