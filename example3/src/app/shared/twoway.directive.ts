import { Directive, ElementRef, Attribute, Input, Output, SimpleChange, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: "input[nxModel]",
    exportAs: "nxModel"
})

export class NxModel {

    direction: string = "None";

    @Input("nxModel")
    modelProperty: string;

    @HostBinding("value")
    fieldValue: string = "";

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["modelProperty"];
        if (change.currentValue != this.fieldValue) {
            this.fieldValue = changes["modelProperty"].currentValue || "";
            this.direction = "Model";
        }
    }

    @Output("nxModelChange")
    update = new EventEmitter<string>();

    @HostListener("input", ["$event.target.value"])
    updateValue(newValue: string) {
        this.fieldValue = newValue;
        this.update.emit(newValue);
        this.direction = "Element";
    }

}
