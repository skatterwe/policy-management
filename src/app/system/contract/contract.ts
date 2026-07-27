import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contract',
  imports: [],
  templateUrl: './contract.html',
  styleUrl: './contract.css',
})
export class ContractComponent {
  contractId = input.required<string>();
  systemId = input.required<string>();
}
