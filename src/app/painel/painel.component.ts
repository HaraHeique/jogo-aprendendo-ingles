import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  private frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase:";
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  // @Output faz com que o atributo possa ser exposto para componentes pais
  @Output("finishGame") public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  // Método da interface OnInit representando o ciclo de vida do componente
  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Componente painel destruído");
  }

  public atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value;
  }

  public verificarResposta(): void {

    // Passa para a próxima rodada com uma frase diferente caso a resposta esteja correta
    if (this.resposta.trim().toLocaleLowerCase() == this.rodadaFrase.frasePtBr.toLocaleLowerCase()) {
      this.rodada++;
      this.atualizaRodada();

      // Incrementa a barra de progresso
      this.progresso += (100 / (this.frases.length));
      //console.log(this.progresso);

      if (this.rodada === 4) {
        //alert("You won :)")
        this.encerrarJogo.emit('vitoria');
      }
    }
    else {
      // Perde uma vida (decrementar a variável tentativas)
      this.tentativas -= 1;
      
      if (this.tentativas == -1) {
        //alert("You lost xD");
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    if (this.rodada < 4) {
      // Defina a frase da rodada com base em alguma lógica
      this.rodadaFrase = this.frases[this.rodada];
    } else {
      this.rodadaFrase = this.frases[this.frases.length - 1]
    }

    // Limpa a resposta
    this.resposta = "";
  }
}
