import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit, OnChanges {
  //Decorando a variável para ser passada com parâmetro
  @Input() public progresso: number = 0;
  public width: string;

  constructor() { }
  ngOnInit() {
  }

  ngOnChanges(data) {
    this.progresso = parseInt(data.progresso.currentValue);
    this.width = this.progresso + '%';
  }

}
