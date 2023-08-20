import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "detail",
    template: `
        <StackLayout>
            <Image [src]="selectedItem.imageSource" width="100%" height="200"></Image>
            <Label [text]="selectedItem.text" textWrap="true" padding="10"></Label>
        </StackLayout>
    `
})
export class DetailComponent implements OnInit {
    selectedItem: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.selectedItem = params;
        });
    }
}
