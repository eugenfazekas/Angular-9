import { NgModule } from '@angular/core';
import { ReactiveFormComponent } from './Components/reactive-form-component/reactive-form.component';
import { StructuralDirectiveComponent } from './Components/structural-directive-component/structural-directive.component';
import { NxAttributeDirective } from './Directives/attr.directive';
import { NxCellColor } from './Directives/cellColor.directive';
import { NxCellColorSwitcher } from './Directives/cellColorSwitcher.directive';
import { NxIteratorDirective } from './Directives/iterator.directive';
import { NxStructureDirective } from './Directives/structure.directive';
import { NxTwoWayDirective } from './Directives/twoway.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
          imports: [FormsModule
              ],
          declarations: [
                  ReactiveFormComponent,
                  StructuralDirectiveComponent,
                  NxAttributeDirective,
                  NxCellColor,
                  NxCellColorSwitcher,
                  NxIteratorDirective,
                  NxStructureDirective,
                  NxTwoWayDirective
              ],
            exports:[
                  ReactiveFormComponent,
                  StructuralDirectiveComponent,
                  NxAttributeDirective,
                  NxCellColor,
                  NxCellColorSwitcher,
                  NxIteratorDirective,
                  NxStructureDirective,
                  NxTwoWayDirective
            ]
  })

export class NxCommonModule {}







