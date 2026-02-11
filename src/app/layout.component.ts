// layout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <div class="main-content">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      padding: 20px;
      min-height: calc(100vh - 120px); /* Ajusta según header/footer */
    }
  `]
})
export class LayoutComponent {}
