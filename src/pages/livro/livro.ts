import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { LivroProvider } from '../../providers/livro/livro';

@IonicPage()
@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  livros: Array<any>;

  constructor(
    private _livroProvider: LivroProvider,
    private _alertCtrl: AlertController,
    private _navCtrl: NavController
  ) { }

  ionViewWillEnter() {
    this._livroProvider.findAll()
      .subscribe(
        res => {
          this.livros = res;
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

  novoLivro() {
    this._navCtrl.push('LivroEditPage');
  }

  selecionarLivro(livro) {
    this._navCtrl.push('LivroEditPage', {livro: livro});
  }

}
