import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";


@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
})
export class ListComponent {
    public listItems = [
        { imageSource: "imagen1.png", text: "Elemento 1" },
        { imageSource: "imagen2.png", text: "Elemento 2" },
        // Agrega más elementos aquí
    ];

    constructor(private routerExtensions: RouterExtensions) {}

    onItemTap(args) {
        const selectedItem = this.listItems[args.index];
        const imageSource = selectedItem.imageSource;
        const text = selectedItem.text;
        const route = `detail/${imageSource}/${text}`;
        this.routerExtensions.navigate([route]);
    }
}
