import { Component } from '@angular/core';
import { BANKS } from '../banks';
import { Bank } from '../bank';
import { NgFor } from '@angular/common';
import { BankDetail } from '../bank-detail/bank-detail';

@Component({
  standalone: true,
  selector: 'app-banks',
  imports: [NgFor, BankDetail],
  templateUrl: './banks.html',
  styleUrls: ['./banks.css']
})
export class Banks {
  banks = BANKS;
  selectedBank: Bank | null = null;

  onSelect(bank: Bank): void {
    this.selectedBank = bank;
  }
}