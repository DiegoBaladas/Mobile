import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import * as dialogs from '@nativescript/core/ui/dialogs';
import * as Toast from 'nativescript-toast';
import { Toasty, ToastDuration, ToastPosition } from 'nativescript-toasty';

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  //Cuadro de Dialogo: Es un modal que bloquea el contenido de atras o del fondo
  doLater(fn) { setTimeout(fn, 1000);}

  ngOnInit(): void {
    


    //Toast
    const toast = new Toasty({
      text: "Hola Ing. Angel Ordoñez",
      duration: ToastDuration.LONG,
      position: ToastPosition.BOTTOM,
    });

    this.doLater(() => {
      toast.show();
    });


  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
