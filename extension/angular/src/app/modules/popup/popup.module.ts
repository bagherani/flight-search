import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiApi } from 'src/app/services/ai-api';

import { PopupComponent } from './pages/popup/popup.component';
import { PopupRoutingModule } from './popup-routing.module';

@NgModule({
  declarations: [PopupComponent],
  providers: [AiApi],
  imports: [CommonModule, PopupRoutingModule, FormsModule]
})
export class PopupModule {}
