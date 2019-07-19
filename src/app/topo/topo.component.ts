//CNesse arquivo crio a Classe que vai controlar a View do template(html)
import { Component } from '@angular/core';

//preciso decorar a classe para informar ao Angular que a Classe é um component
@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês'
}