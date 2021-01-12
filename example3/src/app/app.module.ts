import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxAttributeDirective } from './shared/attr.directive';
import { NxModel } from './shared/twoway.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { NxStructureDirective } from './shared/structure.directive';
import { NxIteratorDirective } from './shared/iterator.directive';
import { NxCellColor } from './shared/cellColor.directive';
import { NxCellColorSwitcher } from './shared/cellColorSwitcher.directive';
import { TestComponentComponent } from './test-component/test-component.component';
import { ProductTableComponent } from './test-components/product-table/product-table.component';
import { ProductFormComponent } from './test-components/product-form/product-form.component';
import { ToggleViewComponent } from './test-components/toggle-view/toggle-view.component';
import { NxAddTaxPipe } from './shared/add-tax.pipe';
import { NxCategoryFilterPipe } from './shared/category-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReactiveFormComponent,
    NxAttributeDirective,
    NxModel,
    StructuralDirectiveComponent,
    NxStructureDirective,
    NxIteratorDirective,
    NxCellColor,
    NxCellColorSwitcher,
    TestComponentComponent,
    ProductTableComponent,
    ProductFormComponent,
    ToggleViewComponent,
    NxAddTaxPipe,
    NxCategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
