import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public username: string;
  public password: string;

  constructor(
    private navCtrl: NavController,
    private authProvider: AuthenticationProvider,
    private alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
  }

  login() {
    this.authProvider.login(this.username, this.password)
      .subscribe(
        res => {
          this.navCtrl.setRoot('HomePage');
        },
        err => {
          this.alertCtrl.create({
            title: 'Atenção',
            message: err.message,
            buttons: ['Ok']
          }).present();
        }
      )
  }

}
