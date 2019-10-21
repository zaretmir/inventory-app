import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hangar } from 'src/app/core/models/hangar';
import { tassign } from 'tassign';

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
    owner: new FormControl(
        '',
      [Validators.required]),
    ownerEmail: new FormControl(
      '',
      [Validators.email]),
    phoneNumber: new FormControl(
      '',
      [Validators.required]
    )
  });

  // Getters for cleaner access in template.
  // Allows using hangarName instead of hangarForm.get('hangarName')
  get name() { return this.hangarForm.get('name'); }
  get address() { return this.hangarForm.get('address'); }
  get owner() { return this.hangarForm.get('owner'); }
  get ownerEmail() { return this.hangarForm.get('ownerEmail'); }
  get phoneNumber() { return this.hangarForm.get('phoneNumber'); }

  // Hangar to populate fields when viewing or editing existent hangar
  @Input() hangar?: Hangar;
  @Input() isReadOnly: boolean;
  @Input() isAddNew: boolean;

  @Output() submited = new EventEmitter<Hangar>();

  constructor() { }

  ngOnInit() {
    if (!this.isAddNew) {
      this.isReadOnly && this.hangarForm.disable();
      this.hangarForm.patchValue(this.hangar);
    }
  }

  submit() {
    // set "id" and "isActive" attributes (important when updating):
    const hangarUpdate: Hangar = tassign(this.hangar, this.hangarForm.value);
    this.submited.emit(this.hangarForm.value);
  }

}
