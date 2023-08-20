import { Injectable } from '@angular/core';

@Injectable()

export class NoticiasService {
  private noticias = []

  constructor() {
  }
  agregarNoticia(s: string) {
    if (!this.noticias.includes(s)) {
    this.noticias.push(s)
    console.log('nueva noticia: ' + s)
    }
  }
  getNoticias() {
    return this.noticias
  }
}
