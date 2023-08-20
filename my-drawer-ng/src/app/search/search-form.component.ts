import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "SearchForm",
    template: `
    <TextField [(ngModel)]="textFieldValue" hint="Enter text..."></TextField>
    <Button text="Button" (tap)="onButtonTap()"></Button>
    `
})

export class SearchFormComponent implements OnInit{

    textFieldValue: string = "";
    @Output() search: EventEmitter<string> = new EventEmitter();
    @Input() incial : string;           //Le pondre al formulario un entrada ya estatica

    ngOnInit(): void {
        this.textFieldValue = this.incial;
    }

    onButtonTap(): void {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2){
            this.search.emit(this.textFieldValue);
        }
    }
}
