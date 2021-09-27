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
    "dor",
    "oito",
    "sentido",
    "ter",
    "porque",
    "essas",
    "aposto",
    "algumas",
    "caminho",
    "conseguiu",
    "ai",
    "lhes",
    "capaz",
    "tá",
    "dizes",
    "viste",
    "senhor",
    "qualquer",
    "estar",
    "aquela",
    "prazer",
    "conversar",
    "saiam",
    "umas",
    "droga",
    "lista",
    "seguro",
    "isto",
    "sim",
    "menos",
  ]

  wordsRandom() {
    let newRandomArray: string[] = [];

    for (let i = 0; i < 200; i++) {
      newRandomArray.push(this.words[Math.floor(Math.random() * this.words.length)])
    }
    console.log(newRandomArray)
    console.log(`Palavra: ${newRandomArray}`)

    return newRandomArray;
  }
}


