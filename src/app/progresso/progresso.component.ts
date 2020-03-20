import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit, OnChanges {
  // Recebendo atributo do componente pai, sendo o progresso o componente filho (Tipo um property binding)
  @Input("progress") public progresso: number = 0;
  
  constructor() {
    console.log("Construtor progresso: ", this.progresso);
  }

  ngOnInit() {
    console.log("NgOnInit progresso: ", this.progresso);
  }

  ngOnChanges() {
    console.log("NgOnChanges", this.progresso);
  }
}
