import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {CrudComponent} from "./views/product/crud/crud.component";
import {ProductsCreateComponent} from "./components/product/products-create/products-create.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "products",
        component: CrudComponent
    },
    {
        path: "products/create",
        component: ProductsCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
