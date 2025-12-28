import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { BANKS } from '../banks';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-banks',
  imports: [NgFor],
  templateUrl: './banks.html',
  styleUrl: './banks.css',
})

export class Banks implements OnInit {
  banks = BANKS;
  selectedBank!: Bank;

  constructor() {}

  onSelect(bank: Bank): void {
    this.selectedBank = bank;
  }

  ngOnInit(): void{
    
  }
}
