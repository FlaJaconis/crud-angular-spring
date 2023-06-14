import { Injectable } from '@angular/core';
import { Curso } from 'src/app/cursos/model/curso';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  lista(): Curso[]{
    return[
      {_id: '1', nome:'Angular', categoria : 'front-end'}
    ];
  }
}
