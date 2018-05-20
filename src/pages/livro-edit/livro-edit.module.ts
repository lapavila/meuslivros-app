import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivroEditPage } from './livro-edit';

@NgModule({
  declarations: [
    LivroEditPage,
  ],
  imports: [
    IonicPageModule.forChild(LivroEditPage),
  ],
})
export class LivroEditPageModule {}
