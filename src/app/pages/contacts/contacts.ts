import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  sendMessage() {
    if (this.form.name && this.form.email && this.form.message) {
      const text = `Hello DEL COFFEE!%0A%0AName: ${this.form.name}%0AEmail: ${this.form.email}%0ASubject: ${this.form.subject}%0AMessage: ${this.form.message}`;
      window.open(`https://wa.me/250792305044?text=${text}`, '_blank');
      this.submitted = true;
      this.form = { name: '', email: '', subject: '', message: '' };
    }
  }
}