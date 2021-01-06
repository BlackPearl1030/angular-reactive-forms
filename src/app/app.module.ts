import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { FormatTitlePipe } from './pipes/format-title.pipe';
import { StepFormSelectorComponent } from './components/step-form-selector/step-form-selector.component';
import { SharedService } from "src/app/service/shared.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    MultiStepFormComponent,
    FormatTitlePipe,
    StepFormSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
    SharedService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
