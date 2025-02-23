import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  dropdownStates: { [key: number]: boolean } = {};

  showDropDown(index: number): void {
    this.dropdownStates[index] = true;
  }

  hideDropDown(index: number): void {
    this.dropdownStates[index] = false;
  }
}
