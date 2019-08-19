import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private translate: TranslateService,
               private authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

  public onSelectLanguage(lang: string) {
    this.translate.use(lang);
  }

}
