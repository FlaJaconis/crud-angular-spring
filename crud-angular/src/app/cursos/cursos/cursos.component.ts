import { CursosService } from './../../courses/services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  //poderia ser inicializada direto na variável...
  cursos: Observable<Curso[]>; //observable indica que será um evento assíncrono
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursoService: CursosService){
    //this.cursos = []; ...ou poderia ser inicializada assim

    this.cursos = this.cursoService.lista();
  }

  ngOnInit(): void {

  }

}
