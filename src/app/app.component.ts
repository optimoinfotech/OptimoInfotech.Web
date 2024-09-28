import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { HeroComponent } from "./hero/hero.component";
import { IntroComponent } from "./intro/intro.component";
import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule,
      RouterOutlet,
      RouterModule,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      HeroComponent, IntroComponent,
      ProductsComponent, ServicesComponent,
    ]
})

export class AppComponent {
  title = 'Optimo  Infotech';
}
