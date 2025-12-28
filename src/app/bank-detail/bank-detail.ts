import { Component, Input } from '@angular/core';
import { Bank } from '../bank';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.html',
  styleUrls: ['./bank-detail.css'],
  imports: [NgIf, UpperCasePipe]
})
export class BankDetail {
  @Input() bank: Bank | null = null;
}