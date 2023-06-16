import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Curso } from '../model/curso';
import { CursosService } from './../../courses/services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  //poderia ser inicializada direto na variável...
  cursos$: Observable<Curso[]>; //observable indica que será um evento assíncrono - o símbolo $ na variável é convenção para identificar que é um observable
  displayedColumns = ['nome', 'categoria'];

  constructor(
    private cursoService: CursosService,
    public dialog: MatDialog
    ){
    //this.cursos = []; ...ou poderia ser inicializada assim
    this.cursos$ = this.cursoService.lista().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }



  ngOnInit(): void {

  }

}
