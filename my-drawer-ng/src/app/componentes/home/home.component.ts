import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, platformNames } from '@nativescript/core'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  plataforma = ''
  constructor() {
    if(platformNames.android){
      this.plataforma = 'Android'
    }else if(platformNames.ios){
      this.plataforma = 'iOS'
    }else{
      this.plataforma = 'Desconocida'
    }
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
