import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  inpClass = 'form-control m-1 inp';
  prohbList = 'Some';
  inpPlchTxt = 'word here..';
  areaPlchTxt = 'text here..';
  prohbWord: string;
  prohibArr: string[] = ['Some'];
  areaTxt: string;
  prohbW: string;
  regExp: any;
  checker = false;
  areaChecker = false;
  constructor() { }

  ngOnInit(): void {
  }
   //додає заборонене слово у масив і перетворює цей масив у стрічку
 add(): void {
  if (this.prohbWord) {
    this.prohibArr.push(this.prohbWord);
    this.prohbList = this.prohibArr.join(', ');
    this.prohbWord = '';
    this.checker = false;
    this.inpPlchTxt = 'word here..'
  }
  else {
    this.checker = true;
    this.inpPlchTxt = 'Pleace write a word!'
  }
}
// список і масив стають пустими
reset(): void {
  this.prohbList = '';
  this.areaTxt = '';
  this.prohibArr = [];
}
// перевіряється текст в textarea
cenzor(): void {
  console.log(this.areaTxt);
  if (this.areaTxt) {
    this.prohibArr.forEach(element => {
      // створюється регулярний вираз з кожного слова з масиву 
      this.regExp = new RegExp(` ${element} `, 'gi');
      // дане слово з масиву заміняється зірочками
      this.prohbW = ' ' + `${element}`.slice(0, 0).padEnd(`${element}`.length, '*') + ' ';
      // текст в textarea заміняється на новий - з зірочками замість заборонених слів
      this.areaTxt = this.areaTxt.replace(this.regExp, this.prohbW);
    });
    this.areaChecker = false;
    this.areaPlchTxt = 'text here..';
  }
  else{
    this.areaChecker = true;
    this.areaPlchTxt = 'Pleace write a text..';
  }
}

}
