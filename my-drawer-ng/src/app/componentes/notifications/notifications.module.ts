import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { NotificationsRoutingModule } from './notifications-routing.module'
import { NotificationsComponent } from './notifications.component'
import { NoticiasService } from '../../servicios/noticias.service'

@NgModule({
  imports: [NativeScriptCommonModule, NotificationsRoutingModule],
  declarations: [NotificationsComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [NoticiasService],
})
export class NotificationsModule {}
