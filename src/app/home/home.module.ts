import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material/material.module';

import { PromocoesComponent } from './promocoes/promocoes.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { SharedModule } from '../shared/shared.module';
import { BuscaModule } from '../busca/busca.module';
import { HomeRoutingModule } from './home-rounting.module';

@NgModule({
  declarations: [PromocoesComponent, DepoimentosComponent, HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    BuscaModule,
    HomeRoutingModule,
  ],
  exports: [PromocoesComponent, DepoimentosComponent, HomeComponent],
})
export class HomeModule {}
