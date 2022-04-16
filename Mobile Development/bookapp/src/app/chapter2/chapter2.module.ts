import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter2PageRoutingModule } from './chapter2-routing.module';

import { Chapter2Page } from './chapter2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter2PageRoutingModule
  ],
  declarations: [Chapter2Page]
})
export class Chapter2PageModule {}
