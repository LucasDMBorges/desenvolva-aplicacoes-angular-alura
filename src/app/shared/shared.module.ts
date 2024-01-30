import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { CardDepoimentoComponent } from './card-depoimento/card-depoimento.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { FooterComponent } from './footer/footer.component';
import { FormBaseComponent } from './form-base/form-base.component';

import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    FooterComponent,
    CardDepoimentoComponent,
    ModalComponent,
    BotaoControleComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    FormBaseComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    FooterComponent,
    CardDepoimentoComponent,
    ModalComponent,
    BotaoControleComponent,
    DropdownUfComponent,
    SeletorPassageiroComponent,
    FormBaseComponent,
  ],
})
export class SharedModule {}
