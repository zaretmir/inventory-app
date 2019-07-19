import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-hangars',
  templateUrl: './hangars.component.html',
  styleUrls: ['./hangars.component.css']
})
export class HangarsComponent implements OnInit {

  hangar: Hangar = new Hangar();

  hangars: Hangar[] = new Array<Hangar>();

  constructor( private apiService: ApiService ) { }

  ngOnInit() {

    this.apiService.getAllHangars().subscribe(
      data => {
        this.hangars = data.map( item => this.apiService.mapResult(item));
        console.log(this.hangars);
      }
    );

    this.apiService.getHangarById().subscribe(
      data => {
        if (data === undefined ) {
          alert('No se ha encontrado el hangar'); // ¿nunca entra aquí?
        } else {
          this.hangar = this.apiService.mapResult(data);
        }
      });
  }

  public seeMoreClick() {
    console.log( 'Click en see more ');
  }
}
