import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, View } from '@nativescript/core'
import { Color } from '@nativescript/core/color'
import { NoticiasService } from '../domain/noticias.service';
import { ToastDuration, Toasty } from 'nativescript-toasty';
import { Store } from '@ngrx/store';
// import { AppState } from '../app.module';
// import { Noticia, NuevaNoticiaAction } from '../domain/noticias-state.model';
import * as SocialShare from "nativescript-social-share";



@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  moduleId: module.id,
  // providers: [NoticiasService]
})
export class SearchComponent implements OnInit {
  
  constructor(public noticias: NoticiasService /*, private store: Store<AppState>*/ ) { }

  //Imagenes
  imgBarca: string = "https://seeklogo.com/images/B/barcelona-fc-logo-CEAE51ACA5-seeklogo.com.png";
  imgMotagua: string = "https://4.bp.blogspot.com/-YaKdAkFoCGc/WYMrnsgsPvI/AAAAAAABNyo/bbKz4la2sAs7RsnfXSywbR89jhm-9AdOQCLcBGAs/s1600/Club%2BDeportivo%2BMotagua.png";
  imgMilan: string = "https://drive.google.com/uc?export=download&id=1pMBaYczaklMHNnvC97DNu1RBii3eZ2pi";
  imgUnited: string = "https://logodownload.org/wp-content/uploads/2016/10/manchester-united-logo-0.png";

  ngOnInit(): void {
    
    // this.store.select((state) => state.noticias.sugerida)
    //         .subscribe((data) => {
    //           const f = data;
    //           if (f != null) {

    //             const toast = new Toasty({
    //               text: "Sugerimos leer: " + f.titulo,
    //               duration: ToastDuration.LONG,
    //             });

    //             toast.show();
    //             //Toasty.show({text: "Sugerimos leer: " + f.titulo, duration: ToastDuration.SHORT})
    //           }
    //         })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onItemTap(args): void {
    //this.store.dispatch(new NuevaNoticiaAction(new Noticia(args.view.bindingContext)));
  }


  //Animacion
  @ViewChild("layout") layout: ElementRef;


  
  resultados: Array<string>;
  buscarAhora(s: string) {
    console.dir("Funcion buscarAhora: " + s);
    this.noticias.buscar(s).then((r: any) => {
      console.log("Resultados de la funcion buscarAhora: " + JSON.stringify(r));
      this.resultados = r;
    }, (e) => {
      console.log("error buscarAhora " + e);
      //Toast.show({text: "Error en la busqueda", duration: ToastDuration.DURATION.SHORT});

      // const toast = new Toasty({
      //   text: "Error en la búsqueda",
      //   duration: ToastDuration.SHORT
      // });
      
      // toast.show();


      
    })
  }


//Compartir en Redes sociales, cuando presione una noticia
  onLongPress(s): void {
    console.log(s);
    SocialShare.shareText(s, "Asunto: compatido desde el curso!");
  }




  
}