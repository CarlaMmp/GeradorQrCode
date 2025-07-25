import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-qr-code-generator',
  standalone: true,
  templateUrl: './qr-code-generator.component.html',
  styleUrl: './qr-code-generator.component.scss',
  imports: [
    CommonModule, 
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule, 
  ],
})
export class QrCodeGeneratorComponent {
  qrCodeImage: string | null = null;
  loading = false;


  constructor(private http: HttpClient) {}

  gerarQrCode() {
    this.loading = true;
    this.http.post<{ url: string }>('http://localhost:8080/qrcode', {}, { responseType: 'json' })
      .subscribe({
        next: (data) => {
          this.qrCodeImage = data.url;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }
}