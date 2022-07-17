import { ContractorService } from './../../../api/services/contractor.service';
import { Component, Input, OnInit } from '@angular/core';
import { Contractor } from '../../../api/custom_models';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})

export class ContractorComponent implements OnInit {
  contractors: Contractor[] = [];
  total: number = 0;
  start = 0;
  limits = [10, 15, 25, 50, 100];
  count = this.limits[0];

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
        this.contractors = items || [];
        this.total = total || 0;
      }
    );
  }

}
