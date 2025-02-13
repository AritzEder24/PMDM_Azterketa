import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { IPregunta } from './../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  // Array bat gordetzeko json-ean dauden galdera guztiak. Gogoratu array-a abiarazten arazoak ekiditzeko
  // Gehitu beharrezkoak diren konponenteak eta zerbitzuak
  galderak : IPregunta[] = [];

  constructor(private fitxategiaIrakurri:HttpClient, private alertController: AlertController) {
    //Datuak kargatu
    this.galderak = [];
  }

  // IPregunta array-a bueltatuko duen metodoa, hau da, galdetegiko galdera guztiak array batean
  getGalderak(): IPregunta[] {
    return this.galderak;
  }

  // Fitxategia irakurtzeko metodoa
  // Gogoratu asinkronoa dela.
  getDatuak (){
    let datuakFitx:Observable<IPregunta[]>;
    datuakFitx = this.fitxategiaIrakurri.get<IPregunta[]>("/assets/…/datos.json");
    datuakFitx.subscribe(datuak => {
  console.log(datuak);
  this.galderak.push(...datuak); //sartzeko array bat beste array batean
  });
  }
  

  // Fitxategitik irakurtzen ditu datuak eta arrayan gordetzen ditu
  

  // Ireki alerta bat galderaren enuntziatuarekin eta konprobatu erantzuna
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿De que marca es este logotipo?',
      buttons: ['ENVIAR'],
      inputs: [
        {
          placeholder: 'Atención a la ortografía',
        },]
    });
    await alert.present();
  }

  // 1 - Erantzun zuzena ala okerra denaren arabera eguneratzen du egoera
  // 2 - Ez ba du asmatzen:
  // 2.1 Saiakera kopuruari kendu bat
  // 2.2 Gordeko du erantzuna erantzunen array-an

}
