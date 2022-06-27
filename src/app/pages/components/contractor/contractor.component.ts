import { ContractorService } from './../../../api/services/contractor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {
  contractors: any[] = [];

  constructor(
    private contractorService: ContractorService
  ) {

  }

  ngOnInit(): void {
    this.contractorService.contractorList().subscribe(
      contractors => {
        this.contractors = contractors;
        console.log(contractors);
      }
    );
  }

}
