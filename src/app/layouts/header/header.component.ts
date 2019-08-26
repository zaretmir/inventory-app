import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  langTag: string;

  constructor( private translate: TranslateService ) { }

  ngOnInit() {
    this.updateLangTag();
  }

  public switchLanguage() {
    if (this.translate.currentLang === 'es') {
      this.translate.use('en').subscribe(
        () => this.updateLangTag()
      );
    } else {
      console.log('No ES');
      this.translate.use('es').subscribe(
        () => this.updateLangTag()
      );
    }
  }

  private updateLangTag() {
    this.langTag = (this.translate.currentLang === 'en') ? 'es' : 'en';
  }

}
