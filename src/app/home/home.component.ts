import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { IntroComponent } from "../intro/intro.component";
import { ProductsComponent } from "../products/products.component";
import { ServicesComponent } from "../services/services.component";
import { CommonComponent } from "../common/common.component";

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeroComponent, IntroComponent, ProductsComponent, ServicesComponent, CommonComponent]
})

export class HomeComponent {

}
