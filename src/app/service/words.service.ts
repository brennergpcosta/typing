import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor() { }

  private words: string[] = [
    "eu",
    "estive",
    "pais",
    "posso",
    "computador",
    "talvez",
    "fazer",
    "conseguir",
    "continuar",
    "escola",
    "presidente",
    "escrever",
    "nenhum",
  ]

  wordsRandom() {
    let newRandomArray: string[] = [];

    for (let i = 0; i < 20; i++) {
      newRandomArray.push(this.words[Math.floor(Math.random() * this.words.length)])
    }
    console.log(newRandomArray)
    console.log(`Palavra: ${newRandomArray}`)

    return newRandomArray;
  }
}


