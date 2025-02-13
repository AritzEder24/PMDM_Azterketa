import { Component } from '@angular/core';
import { CuestionarioService } from './../servicios/cuestionario.service';
import { IPregunta } from './../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  galderak : IPregunta[] = [];
  //Zerbitzua inportatu
  constructor(private cuestionarioService: CuestionarioService) { }

  //Metodo bat sortu "Erantzun" onclick egiteko
  Erantzun() {
    this.cuestionarioService.presentAlert();
  }
  //IGaldera bat jasoko du eta zerbitzua deituko du beharrezkoak diren eragiketak egiteko
  GordeData() {
    this.cuestionarioService.getDatuak();
  }

  //Sortu metodo bat "Gorde"ren onclick-a kudeatzeko
  //Ez du parametrorik jasotzen eta zerbitzuari deituko dio dagokion eragiketak egiteko.
  Gorde() {

  }

}
