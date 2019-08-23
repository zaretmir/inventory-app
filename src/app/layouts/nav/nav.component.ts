import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{


  constructor( public authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

}
