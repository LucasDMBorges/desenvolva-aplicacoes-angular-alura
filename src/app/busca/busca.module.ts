import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { CompanhiasComponent } from './form-busca/filtros-complementares/companhias/companhias.component';
import { LabelComponent } from './form-busca/filtros-complementares/label/label.component';
import { ParadasComponent } from './form-busca/filtros-complementares/paradas/paradas.component';
import { PrecosComponent } from './form-busca/filtros-complementares/precos/precos.component';
import { FiltrosComplementaresComponent } from './form-busca/filtros-complementares/filtros-complementares.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material/material.module';
import { PassagemComponent } from './passagem/passagem.component';
import { PassagemDestaqueComponent } from './passagem-destaque/passagem-destaque.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscaRoutingModule } from './busca-routing.module';

@NgModule({
  declarations: [
    BuscaComponent,
    CardBuscaComponent,
    FormBuscaComponent,
    FiltrosComplementaresComponent,
    CompanhiasComponent,
    LabelComponent,
    ParadasComponent,
    PrecosComponent,
    PassagemComponent,
    PassagemDestaqueComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    BuscaRoutingModule,
  ],
  exports: [
    BuscaComponent,
    CardBuscaComponent,
    FormBuscaComponent,
    FiltrosComplementaresComponent,
    CompanhiasComponent,
    LabelComponent,
    ParadasComponent,
    PrecosComponent,
    PassagemComponent,
    PassagemDestaqueComponent,
  ],
})
export class BuscaModule {}
