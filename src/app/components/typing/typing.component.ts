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
  isRight: boolean = true;
  paintedWords: boolean [] = [];
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
      if (this.index == this.wordsList.length) {
        this.wordsList = this.typeServ.wordsRandom();
        this.index = 0;
        this.points = 0;
      }

      console.log(
        `type ${this.index + 1}: ${typeof this.type}, wordslist: ${typeof this
          .wordsList[this.index]}`
      );
      if (this.type.trim() === this.wordsList[this.index]) {
        this.isRight = true;
        this.points++;
        this.statusIndex[this.index] = true;
      } else {
        this.isRight = false;
        this.statusIndex[this.index] = false;
        console.log('errou');
        console.log(
          'resposta: ' + this.wordsList[this.index] + ' | escrito: ' + this.type
        );
      }
      this.index++;
      this.type = '';
      console.log(this.isRight);
      console.log(`status Index: ${this.statusIndex}`)
    }
  }

  onRestart() {
    this.index = 0;
    this.points = 0;
    console.log('TYPING RESTARED');
  }

  statusCheck(index: number){
    return this.statusIndex[index]
  }
}
