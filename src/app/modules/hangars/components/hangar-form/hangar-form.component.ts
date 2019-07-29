import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';

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
      Validators.required),
    ownerInfo: new FormGroup({
      owner: new FormControl(
        '',
        [Validators.required]),
      email: new FormControl(
        '',
        [Validators.email]),
      phone: new FormControl(
        '',
        [Validators.required]
      )
      })

  });

  // Getters for cleaner acces in template. Allows using hangarName instead of hangarForm.get('hangarName')
  get name() {
    return this.hangarForm.get('name');
  }

  get address() {
    return this.hangarForm.get('address');
  }

  get owner() {
    return this.hangarForm.get('ownerInfo.owner');
  }

  get email() {
    return this.hangarForm.get('ownerInfo.email');
  }

  get phone() {
    return this.hangarForm.get('ownerInfo.phone');
  }

  @Input() isEditExistent?: boolean;
  @Input() isReadOnly?: boolean;
  @Input() hangarPopulate: Hangar; // Hangar to populate value fields with

  @Output() outputToParent = new EventEmitter<Hangar>();

  hangar: Hangar =  new Hangar();

  constructor( private hangarApiService: HangarApiService ) { }

  ngOnInit() {
    if (this.isReadOnly || this.isEditExistent) {
      this.name.setValue(this.hangarPopulate.name);
      this.address.setValue(this.hangarPopulate.address);
      this.owner.setValue(this.hangarPopulate.owner);
      this.email.setValue(this.hangarPopulate.ownerEmail);
      this.phone.setValue(this.hangarPopulate.phoneNumber);
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
