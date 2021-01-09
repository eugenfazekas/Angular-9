import { Directive, Input, Output, EventEmitter,
         SimpleChange, ContentChildren, QueryList } from "@angular/core";
import { NxCellColor } from "./cellColor.directive";

@Directive({
    selector: "table"
})
export class NxCellColorSwitcher {

    @Input("nxCellDarkColor")
    modelProperty: Boolean;
    
    @ContentChildren(NxCellColor, {descendants: true})
    contentChildren: QueryList<NxCellColor>;

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        this.updateContentChildren(changes["modelProperty"].currentValue);
    }

    ngAfterContentInit() {
        this.contentChildren.changes.subscribe(() => {
            setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
        });
    }

    private updateContentChildren(dark: Boolean) {
        if (this.contentChildren != null && dark != undefined) {
            this.contentChildren.forEach((child, index) => {
                child.setColor(index % 2 ? dark : !dark);
            });
        }
    }
}
