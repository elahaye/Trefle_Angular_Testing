import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  template: `
    <h1>{{ title }}</h1>

    <mat-form-field>
      <mat-label>Search</mat-label>
      <input matInput placeholder="Jasmine" [(ngModel)]="search" />
    </mat-form-field>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 100%;
    }

    mat-form-field {
      width: 90%;
      max-width: 500px;
    }
  `,
})
export class SearchComponent {
  title = 'The Plant Library';
  search = '';
}
