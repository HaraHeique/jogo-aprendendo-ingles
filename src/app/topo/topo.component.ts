import { Component } from '@angular/core';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'],
    // template: `<p>
    //                Este é o componente Topo
    //            </p>`,
    // styles: [`.example { 
    //     color: red 
    // }`],
    //selector: '[app-topo]'
    //selector: '.app-topo'
})
export class TopoComponent {
    public titulo: string = "Aprendendo Inglês";
}