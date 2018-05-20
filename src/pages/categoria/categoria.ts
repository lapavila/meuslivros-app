import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';

/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  categorias: Array<any>;

  constructor(
    private _categoriaProvider: CategoriaProvider,
    private _alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    this._categoriaProvider.findAll()
      .subscribe(
        res => {
          this.categorias = res;
        },
        err => {
          this._alertCtrl.create({
            title: 'Atenção',
            message: err.message,
            buttons: ['Ok']
          }).present();
        }
      )
  }

}
