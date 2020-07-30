import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent implements OnInit {
  public contadorClique: number = 0;
  public urlImagem: string = '../../../assets/webcam.jpg';
  public nome: string = '';

  constructor() {}

  ngOnInit(): void {}

  public adicionarClique(): void {
    this.contadorClique++;
  }

  public zerarContador(): void {
    this.contadorClique = 0;
  }

  public keyUp(event: any): void {
    this.nome = event.target.value;
  }
}
