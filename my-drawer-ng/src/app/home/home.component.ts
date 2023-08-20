import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ImageAsset } from '@nativescript/core'
import * as camera from "nativescript-camera";
import { Image } from 'tns-core-modules/ui/image';


@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }


  onButtonTap(): void {
    camera.requestPermissions().then(
      function sucess() {
        const options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
        camera.takePicture(options).
        then((imageAsset) => {
          console.log("Tamaño: " + imageAsset.options.width + "x" + imageAsset.options.height);
          console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
          console.log("Foto Guardada!");
        }).catch((err) => {
          console.log("Error -> " + err.message);
        });
      },
      function feature() {
        console.log("Permiso de camara no aceptado por el usuario")
      }
    );
  }




}
