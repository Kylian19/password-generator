import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  //variable declarations
  length: number = 0;
  lettersInclude: boolean = false;
  numbersInclude: boolean = false;
  symbolsInclude: boolean = false;
  password: string = "";
  numbers: string = "1234567890";
  letters: string = "azertyuiopqsdfghjklmwxcvbn";
  symbols: string = "&(-_)=$%*!:/;.?"
  validChars: string = "";
  passwordGenerated= "";

  constructor() { }

  ngOnInit(): void {
  }

  onChangeLength($event: any) {
    const parsedValue = parseInt($event.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.lettersInclude = !this.lettersInclude;
  }

  onChangeUseNumbers(){
    this.numbersInclude = !this.numbersInclude;
  }

  onChangeUseSymbols(){
    this.symbolsInclude = !this.symbolsInclude;
  }

  onButtonClick(){
    //push chars available to validChars
    if(this.lettersInclude){
      this.validChars += this.letters;
    }
    if(this.numbersInclude){
      this.validChars += this.numbers;
    }
    if(this.symbolsInclude){
      this.validChars += this.symbols;
    }

    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * this.validChars.length);
      this.passwordGenerated += this.validChars[index];
    }
    this.password = this.passwordGenerated;
  }

}
