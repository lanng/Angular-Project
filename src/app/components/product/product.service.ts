import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../views/product/product.model";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    baseApi: string = "http://localhost:3001/products";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) {
    }

    showMessage(msg: string, error: boolean = false): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: error ? ['msg-error'] : ['msg-success']
        });
    }

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseApi, product,).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    read(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseApi).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    readById(id: string | null): Observable<Product> {
        const url = `${this.baseApi}/${id}`;
        return this.http.get<Product>(url).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    update(product: Product): Observable<Product> {
        const url = `${this.baseApi}/${product.id}`;
        return this.http.put<Product>(url, product).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    delete(id: number | undefined): Observable<Product> {
        const url = `${this.baseApi}/${id}`;
        return this.http.delete<Product>(url).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        );
    }

    errorHandler(e: any): Observable<any> {
        this.showMessage('Deu ruim ae cara!', true);
        return EMPTY;
    }
}
