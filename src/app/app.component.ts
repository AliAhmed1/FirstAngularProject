import { Component } from '@angular/core';
import { DataService } from './data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <p [@myanimation]='state' (click)="animateMe()">I will animate</p>
  
  <h1 [ngClass] = "titleclasses">hello</h1>
  <h1 [ngStyle] = "titlestyles">Welcome</h1>
  <p> {{ myobj.age }}</p>
  <p>{{someproperty}}</p>
  <ul>
  <li *ngFor="let arr of myarr">{{arr}}</li>
  </ul>
  <div *ngIf="my; then tmpl1 else tmpl2"></div>

  <ng-template #tmpl1>truth.</ng-template>
  <ng-template #tmpl2>false.</ng-template>

  <br/>
  <img src = "{{angularLogo}}">
  <img [src]="angularLogo">
  <img bing-src = "angularLogo">

  <br/>

  <button [disabled]="buttonStatus">My button</button>
  <button (click)="myEvent()">click button</button>
  `,
  styles: [`
  p {
    width:200px;
    background:blue;
    margin: 100px auto;
    text-align:center;
    padding:20px;
    font-size;1.5em
  }

  h1 {
    text-decoration : underline;
  }

  .red-title {
    color : red
  }

  .large-font {
    font-size : 4em
  }
  
  `],
  animations: [
    trigger('myanimation',[
      state('small', style({
        transform: 'scale(1)'        
      })),
      state('large', style({
        transform: 'scale(1.2)'        
      })),
      transition('small <=> large' , animate('300ms ease-in' , keyframes([
        style({
          opacity: 0,
          transform: 'translateY(-75%)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'translateY(35%)',
          offset: 0.5,
        }),
        style({
          opacity: 1,
          transform: 'translateY(0)',
          offset: 1,
        })
      ]))),
    ]),
  ]
})
export class AppComponent {

  state: string = 'small'

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small' );
  }

  constructor(private dataservice: DataService) {

  }

  someproperty: string = '';

  ngOnInit() {
    console.log(this.dataservice.cars)
    this.someproperty = this.dataservice.mydata();
  }

  myobj = {
    gender: 'male',
    age: 33,
  }
  myarr = ['hi', 'hello'];
  my = false;

  angularLogo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'

  buttonStatus = false;

  myEvent() {
    console.log(event)
  }

  titleclasses = {
    'red-title': true,
    'large-font': true
  }

  titlestyles = {
    'color': 'blue',
    'font-size': '5em',
  }

}
