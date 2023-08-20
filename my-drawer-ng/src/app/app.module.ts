import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NoticiasService } from './domain/noticias.service'
// import { 
//   initializeNoticiasState,
//   NoticiasEffects,
//   NoticiasState,
//   reducersNoticias
//  } from "./domain/noticias-state.model"
import { EffectsModule } from '@ngrx/effects'
import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store/src'

//redux init
//tslint:disable-next-line:interface-name
// export interface AppState {
//   noticias: NoticiasState;
// }

// const reducers: ActionReducerMap<AppState> = {
//   noticias: reducersNoticias
// };

// const reducersInitialState = {
//   noticias: initializeNoticiasState()
// };


@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule, NativeScriptUISideDrawerModule,
            // NgRxStoreModule.forRoot(reducers, { 
            //   initialState: reducersInitialState as any,
            //   runtimeChecks: {
            //     strictActionImmutability: false,
            //     strictStateImmutability: false,
            //   }
            // }),
            // EffectsModule.forRoot([NoticiasEffects])
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [NoticiasService]
})
export class AppModule {}
