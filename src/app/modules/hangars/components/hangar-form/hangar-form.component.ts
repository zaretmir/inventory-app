import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { ApiService } from 'src/app/core/services/api.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hangar-form',
  templateUrl: './hangar-form.component.html',
  styleUrls: ['./hangar-form.component.css']
})
export class HangarFormComponent implements OnInit {

  hangarForm =  new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]),
    address: new FormControl(
      '',
      Validators.required)
  });

  // Getters for cleaner acces in template. Allows using hangarName instead of hangarForm.get('hangarName')
  get name() {
    return this.hangarForm.get('name');
  }

  get address() {
    return this.hangarForm.get('address');
  }

  @Input() isReadOnly: boolean;
  @Input() hangarReadOnly: Hangar; // Hangar to populate value fields with

  @Output() outputToParent = new EventEmitter<Hangar>();

  hangar: Hangar =  new Hangar();

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    if (this.isReadOnly) {
      this.name.setValue(this.hangarReadOnly.name);
      this.address.setValue(this.hangarReadOnly.address);
    }
  }

  onSubmit() {
    this.outputToParent.emit( this.hangarForm.value );

  }
  /*

  onSubmit(event) {
    console.log('OnSubmit');
    this.hangar.name = 'H_Test';
    this.hangar.address = 'A_test';
    this.newHangarData.emit( this.hangar );
  }
  */

  /*
  onSubmit() {
    if (!this.isReadOnly) {
    }
    const formData: FormData = new FormData();
    formData.append('name', this.hangar.name);
    formData.
    console.log( 'Submit clicked' );
    console.log( 'Hangar:' + this.hangar.name.toString());
    this.newHangar.emit( this.hangar );
  }
  */

}
