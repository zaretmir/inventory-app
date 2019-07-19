import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-hangar-form',
  templateUrl: './hangar-form.component.html',
  styleUrls: ['./hangar-form.component.css']
})
export class HangarFormComponent implements OnInit {

  hangar: Hangar =  new Hangar();

  @Output() newHangar = new EventEmitter<Hangar>();

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
  }

  submitHangar() {
    const formData: FormData = new FormData();
    formData.append('name', this.hangar.name);
    console.log( 'Submit clicked' );
    console.log( 'Hangar:' + this.hangar.name.toString());
    this.newHangar.emit( this.hangar );
  }

}
