import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  testForm: FormGroup;

  availableElements = [
    {id: 1, name: 'opcion 1'},
    {id: 2, name: 'opcion 2'},
    {id: 3, name: 'opcion 3'}
    ];

  constructor() { }

  ngOnInit() {
    this.testForm = new FormGroup({
      selectedElementsControl: new FormControl([])
    });
  }

}
