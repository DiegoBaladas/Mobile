import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { ListComponent } from "./list.component";
import { DetailComponent } from "./detail.component";

const routes: Routes = [
    { path: "", component: ListComponent },
    { path: "detail/:imageSource/:text", component: DetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
