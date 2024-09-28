import { Component } from '@angular/core';
import { CommonComponent } from "../common/common.component";

@Component({
    selector: 'products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [CommonComponent]
})

export class ProductsComponent   {

}
