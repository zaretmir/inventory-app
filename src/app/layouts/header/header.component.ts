import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lang: string;

  constructor( private translate: TranslateService ) { }

  ngOnInit() {
    this.lang = 'en';
  }

  public onSelectLanguage() {
    this.lang = (this.lang === 'en') ? 'es' : 'en';
    this.translate.use(this.lang);
  }

}
