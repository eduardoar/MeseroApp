import { PlatoService } from './../../_service/plato.service';
import { Plato } from './../../_model/plato';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plato-lista',
  templateUrl: './plato-lista.component.html',
  styleUrls: ['./plato-lista.component.css']
})
export class PlatoListaComponent implements OnInit {

  platos: Plato[];
  filterQuery = "";

  constructor(private platoService: PlatoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.platoService.platosCambio.subscribe(data =>{
        this.platos = data;
      });

      this.platoService.getPlatos().subscribe(data =>{
      this.platos = data;
    }, (err) =>{
      //this.platos = [];
    });
  }

  crearNuevoPlato(){
    this.router.navigate(['nuevo'], { relativeTo: this.route});
  }

}
