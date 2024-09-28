import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  collapseNavMenu: boolean = false;

  ToggleNavMenu()
  {
    this.collapseNavMenu = !this.collapseNavMenu;
  }
 
  OnMenuClick()
  {
    this.collapseNavMenu = false;
  } 

  private NavigateTo(url: string)
  {
    console.log();
      // NavigationManager.NavigateTo(url);
      this.collapseNavMenu = false;
  }


}
