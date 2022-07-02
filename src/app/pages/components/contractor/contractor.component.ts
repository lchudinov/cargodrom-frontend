import { ContractorService } from './../../../api/services/contractor.service';
import { Component, Input, OnInit } from '@angular/core';
import { Contractor } from '../../../api/custom_models';
import { generateMockupContractors } from './contractor.mockup';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})

export class ContractorComponent implements OnInit {
  contractors: Contractor[] = [];
  total: number = 0;
  start = 0;
  count = 10;

  @Input() generateContractors = true;

  constructor(
    private contractorService: ContractorService
  ) {

  }

  ngOnInit(): void {
    this.updateTable(this.start, this.count);
  }

  onStartChange(start: number): void {
    this.updateTable(start, this.count);
  }

  onCountChange(count: number): void {
    this.updateTable(0, count);
  }
  
  private updateTable(start: number, count: number): void {
    const desiredStart = 0;
    const params = { start: desiredStart, count };
    this.contractorService.contractorList(params).subscribe(
      ({ items, total }) => {
        this.start = start;
        this.count = count;
        if (this.generateContractors) {
          const firstContractor = (items && Array.isArray(items) && items.length > 0) ? items[0] : undefined;
          const mockup = generateMockupContractors(firstContractor, this.count, this.start, 1432);
          this.contractors = mockup.items;
          this.total = mockup.total;
        } else {
          this.contractors = items || [];
          this.total = total || 0;
        }
      }
    );
  }
  
}
