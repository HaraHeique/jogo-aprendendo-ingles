import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input("tentativas") public tentativas: number = 0;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  // public coracaoCheio: string = "../../assets/coracao_cheio.png";
  // public coracaoVazio: string = "../../assets/coracao_vazio.png";

  constructor() {
    
  }

  /* Utilizado quando há modificação de um valor nos componentes pais. Como no exemplo
  do @Input tentativas, que é atualizado no componente pai toda vez que o usuário erra a tradução
  */
  ngOnChanges(): void {
    if (this.tentativas !== this.coracoes.length) {
      let indice: number = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  }

  ngOnInit() {
  }
}
