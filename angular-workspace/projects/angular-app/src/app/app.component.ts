import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      myCheckbox: new FormControl<boolean>(false),
      myInput: new UntypedFormControl(''),
      myTextArea: new UntypedFormControl(''),
    });
  }

  onSubmit(): void {
    console.warn('Form submitted!');
  }
}
