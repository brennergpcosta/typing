import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WordsService } from 'src/app/service/words.service';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css'],
})
export class TypingComponent implements OnInit {
  constructor(private typeServ: WordsService) {}

  wordsList: string[] = [];
  index: number = 0;
  points: number = 0;
  statusIndex: boolean [] = [];

  type: string = '';

  ngOnInit(): void {
    this.index = 0;
    this.points = 0;
    this.wordsList = this.typeServ.wordsRandom();
  }

  onKeyPress(event: any) {
    let keyPressed = event.code;
    if (keyPressed === 'Space') {
      if (this.index == this.wordsList.length-1) {
        this.onRestart()
      }else{
        this.isRight(this.index);
        console.log(`Index: ${this.index} | Status Index: ${this.statusIndex}`)
        this.index++;
        this.type = '';
      }
    }
  }

  onRestart() {
    this.index = 0;
    this.points = 0;
    this.statusIndex = [];
    this.type = '';
    this.wordsList = this.typeServ.wordsRandom();
    console.log('TYPING RESTARED');
  }

  statusCheck(index: number){
    return this.statusIndex[index]
  }

  isRight(index: number){
    if(this.wordsList[index] == this.type.trim()){
      this.statusIndex[index] = true;
      this.points++;
      return true;
    }else{
      this.statusIndex[index] = false;
      return false;
    }
  }

  currentWord(index: number){
    return this.wordsList[index].split('')
  }

  letterColor(letterIndex: number) {
    return this.wordsList[this.index].split('')[letterIndex] == this.type.trim().split('')[letterIndex]
  }
}
