import { tap, first, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Curso } from 'src/app/cursos/model/curso';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  lista(){


    //se colocar o generecs reconhecerá como um observable
    //o método pipe só foi colocado para que se verificasse o resultado sem o uso do debug
    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(), //diz para o servidor que estamos interessados só na primeira resposta e encerra
      //delay(15000),
      tap(cursos => console.log(cursos)) //só pra testar se a função está sendo executada
    );
  }
}
