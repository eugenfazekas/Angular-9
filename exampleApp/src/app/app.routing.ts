import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './core/form/form.component';
import { TableComponent } from './core/table/table.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProductCountComponent } from './core/product-count/product-count.component';
import { CategoryCountComponent } from './core/category-count/category-count.component';
import { ModelResolver } from './model/model.resolver';
import { TermsGuard } from './terms.guard';
import { UnsavedGuard } from './core/unsaved.guard';

const routes: Routes = [
        { path: "form/:mode/:id", component: FormComponent, canDeactivate:[UnsavedGuard] },
        { path: "form/:mode", component: FormComponent, canActivate:[TermsGuard] },
        { path: "table", component: TableComponent},
        { path: "table/:category", component: TableComponent },
        { path: "", redirectTo: "/table", pathMatch: "full" }, 
        { path: "**", component: NotFoundComponent }
]

export const routing = RouterModule.forRoot(routes);