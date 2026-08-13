import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systems',
  imports: [],
  templateUrl: './systems.html',
  styleUrl: './systems.css',
})
export class Systems {
  readonly systems = signal([
    { name: 'System 1', id: '1' },
    { name: 'System 2', id: '2' },
    { name: 'System 3', id: '3' },
    { name: 'System 4', id: '4' },
  ]);

  router = inject(Router);

  onOpenSystem(system: any, newTab = false) {
    if (!newTab) {
      this.router.navigate([system.name]);
      return;
    }

    window.open(`https://skatterwe.github.io/policy-management/${system.name}`, '_blank');
  }
}
