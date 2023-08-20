import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { NoticiasService } from '../../servicios/noticias.service'

@Component({
  selector: 'Notifications',
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {
  constructor(public noticias: NoticiasService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.noticias.agregarNoticia('Noticia 1')
    this.noticias.agregarNoticia('Noticia 2')
    this.noticias.agregarNoticia('Noticia 3')
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
