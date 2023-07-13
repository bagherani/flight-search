import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PopupComponent } from './pages/popup/popup.component';
import { PopupRoutingModule } from './popup-routing.module';

@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule, PopupRoutingModule, FormsModule]
})
export class PopupModule {}
