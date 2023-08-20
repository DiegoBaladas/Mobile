import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

@Component({
  selector: 'Chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    console.log('SearchComponent ngOnInit')
    console.log({nombre: 'Jorge', apellido: 'Gonzalez'});
    console.dir({nombre: 'Jorge', apellido: 'Gonzalez'});
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
