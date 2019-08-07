import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() routePath: string;


  constructor() { }

  ngOnInit() {
  }

}
