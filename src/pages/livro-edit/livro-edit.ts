import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';
import { LivroProvider } from '../../providers/livro/livro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-livro-edit',
  templateUrl: 'livro-edit.html',
})
export class LivroEditPage {

  public titulo: string = 'Novo Livro';
  public categorias: Array<any>;
  public livroForm: FormGroup;
  public livro: any;

  constructor(
    private _alertCtrl: AlertController,
    private _navCtrl: NavController,
    private _navParams: NavParams,
    private _formBuilder: FormBuilder,
    private _categoriaProvider: CategoriaProvider,
    private _livroProvider: LivroProvider
  ) {
    this.livroForm = this._formBuilder.group({
      id: [null],
      titulo: [null, Validators.required],
      autor: [null, Validators.required],
      categoriaId: [null, Validators.required]
    });

    this.livro = this._navParams.get('livro');
    if (this.livro) {
      this.titulo = 'Livro';
      this.livroForm.get('id').setValue(this.livro.id);
      this.livroForm.get('titulo').setValue(this.livro.titulo);
      this.livroForm.get('autor').setValue(this.livro.autor);
      this.livroForm.get('categoriaId').setValue(this.livro.categoria.id);
    }
   }

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
    );
  }

  save() {
    this._livroProvider.save(this.livroForm.value)
    .subscribe(
      res => {
        this._alertCtrl.create({
          title: 'Sucesso',
          message: 'Livro gravado com sucesso.',
          buttons: ['Ok']
        }).present();
      },
      err => {
        this._alertCtrl.create({
          title: 'Atenção',
          message: err.message,
          buttons: ['Ok']
        }).present();
      }
    );
  }

  delete() {
    this._livroProvider.delete(this.livro.id)
    .subscribe(
      res => {
        this._alertCtrl.create({
          title: 'Sucesso',
          message: 'Livro excluido com Sucesso',
          buttons: [{
            text: 'Ok',
            handler: () => {this._navCtrl.pop();}
          }
        ]
        }).present();
      },
      err => {
        this._alertCtrl.create({
          title: 'Atenção',
          message: err.message,
          buttons: ['Ok']
        }).present();
      }
    );
  }

}
