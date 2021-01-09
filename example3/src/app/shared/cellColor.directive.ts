import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: "td"
})
export class NxCellColor {

    @HostBinding("class")
    bgClass: string = "";

    setColor(dark: Boolean) {
        this.bgClass = dark ? "bg-dark" : "";
    }
}
