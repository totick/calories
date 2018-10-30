import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body-mass-index-calc',
  templateUrl: './body-mass-index-calc.component.html',
  styleUrls: ['./body-mass-index-calc.component.css']
})
export class BodyMassIndexCalcComponent implements OnInit {

  bmiResult: number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    let weight = +f.value.weight;
    let height = (+f.value.height) / 100;
    this.bmiResult = Math.round((weight / (height * height)) * 10) / 10;
  }

}
