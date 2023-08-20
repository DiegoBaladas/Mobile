import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ChatComponent } from './chat.component'
import { NotificationsComponent } from '../notifications/notifications.component'
const routes: Routes = [{ path: '', component: ChatComponent },
                        { path: 'notifications', component: NotificationsComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ChatRoutingModule {}
