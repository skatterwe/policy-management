import { Component, inject, Inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  router = inject(Router);

  protected readonly title = signal('policy-management-system');

  constructor() {

    // @ts-ignore
    const fdc3: any = window['fdc3'];
    console.log(fdc3);
    if (fdc3 !== undefined) {
      let intent = 'OpenPolicySystem';

      fdc3.addIntentListener(intent, (ctx: any, metadata: any) => {
        console.log('Received Context For Intent: ' + intent, ctx);
        console.log('Received Metadata With Intent: ' + intent, metadata);
        this.router.navigate([ctx.system, 'contracts', ctx.id]);
      });

    }
  }

}
