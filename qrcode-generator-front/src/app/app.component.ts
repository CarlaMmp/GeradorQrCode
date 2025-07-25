import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeGeneratorComponent } from './components/qr-code-generator/qr-code-generator.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    QrCodeGeneratorComponent,
],
})

export class AppComponent {
  title = 'qrcode-generator-front';
}
