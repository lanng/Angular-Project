import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {Product} from "../../../views/product/product.model";

@Component({
    selector: 'app-products-create',
    templateUrl: './products-create.component.html',
    styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

    product: Product = {
        name: '',
        price: 0
    }

    constructor(private productService: ProductService, private router: Router) {
    }

    ngOnInit(): void {
    }

    createProduct(): void {
        this.productService.showMessage('Operação concluída com sucesso');
    }

    cancel(): void {
        this.router.navigate(['products']);
    }
}
