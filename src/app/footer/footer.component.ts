import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  value = '5';
  switch = false;
  public title: string = '';

  constructor() {}

  ngOnInit():void {}
}
