import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calories-calc',
  templateUrl: './calories-calc.component.html',
  styleUrls: ['./calories-calc.component.css']
})
export class CaloriesCalcComponent implements OnInit {

  /*
  För män: BMR = 66,4730 + (13,7516 x vikt i kg) + (5,0033 x längd i cm) – (6,7550 x ålder i år)
  För kvinnor: BMR = 655,0955 + (9,5634 x vikt i kg) + (1,8496 x längd i cm) – (4,6756 x ålder i år)

1,2 – minimal eller ingen aktivitet
1,375 – låg aktivitet
1,55 – normal aktivitet
1,725 – hög aktivitet
1,9 – väldigt hög aktivitet
  */

  trainingLevels = [
    {value: 1.2, text: 'minimal eller ingen aktivitet'},
    {value: 1.375, text: 'låg aktivitet'},
    {value: 1.55, text: 'normal aktivitet'},
    {value: 1.725, text: 'hög aktivitet'},
    {value: 1.9, text: 'väldigt hög aktivitet'}
  ];

  defaultTrainingLevel: number = this.trainingLevels[2].value;
  defaultGender: string = 'male';
  totalBMR: number = undefined;

  constructor() { }

  ngOnInit() {
  }

  bmrForMen(weight: number, height: number, age: number, trainingLevel: number){
    const bmr = 66.4730 + (13.7516 * weight) + (5.0033 * height) - (6.7550 * age);
    return bmr * trainingLevel;
  }

  bmrForWomen(weight: number, height: number, age: number, trainingLevel: number){
    const bmr = 655.0955 + (9.5634 * weight) + (1.8496 * height) - (4.6756 * age);
    return bmr * trainingLevel;
  }

  onSubmit(f: NgForm){
    console.log(f);
    let bmr = undefined;

    if(f.value.gender === 'male'){
      this.totalBMR = this.bmrForMen(f.value.weight, f.value.height, f.value.age, f.value.trainingLevel);
    }
    else{
      this.totalBMR = this.bmrForWomen(f.value.weight, f.value.height, f.value.age, f.value.trainingLevel);
    }

    if(this.totalBMR){
      this.totalBMR = Math.round(this.totalBMR);
    }
  }

}
