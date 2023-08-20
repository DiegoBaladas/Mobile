import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  items: any[] = [
    { id: 1, title: "Item 1", image: "imagen1.jpg" },
    { id: 2, title: "Item 2", image: "imagen2.jpg" },
    // ... otros elementos
  ];
  routerExtensions: any;
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
  onItemTap(item): void {
    this.routerExtensions.navigate(["item-detail", item.id]);
  }
}
