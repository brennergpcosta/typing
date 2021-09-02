import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  type: string = '';

  onKeyPress(event: any){
    let keyPressed = event.code
    if(keyPressed === "Space"){
      this.type = ''
    }
  }

}
