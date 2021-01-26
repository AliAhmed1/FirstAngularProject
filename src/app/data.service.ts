import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 

  }

  cars = ['a' , 'b' , 'c']

  mydata(){
    return "this is my cars";
  }
}
