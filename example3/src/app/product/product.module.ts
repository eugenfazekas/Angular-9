import { NgModule } from '@angular/core';
import { Model } from './shared/repository.model';
import { SimpleDataSource } from './shared/datasource.model';
import { DiscountService } from './shared/discount-service';
import { ProductComponent } from './components/product-component/product-component.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ToggleViewComponent } from './components/toggle-view/toggle-view.component';
import { DiscountDisplayComponent } from './components/discount-display/discount-display.component';
import { DiscountEditorComponent } from './components/discount-editor/discount-editor.component';
import { NxAddTaxPipe } from './pipes/add-tax.pipe';
import { NxCategoryFilterPipe } from './pipes/category-filter.pipe';
import { NxDiscountPipe } from './pipes/discount.pipe';
import { NxDiscountAmountDirective } from './directives/discount-amount.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NxCommonModule } from '../common/common-module';

@NgModule({
        imports:[FormsModule,CommonModule,NxCommonModule
                 ],
        declarations:[
                ProductComponent,
                ProductFormComponent,
                ProductTableComponent,
                ToggleViewComponent,
                DiscountDisplayComponent,
                DiscountEditorComponent,
                NxAddTaxPipe,
                NxCategoryFilterPipe,
                NxDiscountPipe,
                NxDiscountAmountDirective,
                ],
        providers:[
                Model,
                SimpleDataSource,
                DiscountService
                ],
         exports:[
                ProductComponent,
                ProductFormComponent,
                ProductTableComponent,
                ToggleViewComponent,
                DiscountDisplayComponent,
                DiscountEditorComponent,
                NxAddTaxPipe,
                NxCategoryFilterPipe,
                NxDiscountPipe,
                NxDiscountAmountDirective
         ]       
})
export class ProductModule {}
