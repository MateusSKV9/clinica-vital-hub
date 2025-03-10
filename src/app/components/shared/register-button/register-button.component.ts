import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-button',
  standalone: true,
  imports: [],
  templateUrl: './register-button.component.html',
  styleUrl: './register-button.component.css',
})
export class RegisterButtonComponent implements OnInit {
  textButton: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const cadastro = this.router.url.includes('/cadastro/');

    if (cadastro) {
      this.textButton = 'Casdastrar';
    } else {
      this.textButton = 'Verificar';
    }
  }
}
