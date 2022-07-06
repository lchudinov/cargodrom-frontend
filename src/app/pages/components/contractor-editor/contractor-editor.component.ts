import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contractor } from './../../../api/custom_models/contractor';
import { ContractorService } from './../../../api/services/contractor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contractor-editor',
  templateUrl: './contractor-editor.component.html',
  styleUrls: ['./contractor-editor.component.scss']
})
export class ContractorEditorComponent implements OnInit {

  contractor: Partial<Contractor> = {};
  isEditMode: boolean = false;
  contractorForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private contractorService: ContractorService,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.contractorForm = this.fb.group({
      address: ['', []],
      name: ['', [Validators.required]],
      ind: ['', [Validators.required]],
      city_name: ['', [Validators.required]],
      phone: ['', []],
      web: ['', []],
      rating_nps: [0, []],
      user_rating_nps: [0, []]
    });
  }


  ngOnInit(): void {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.isEditMode = segments[1] === 'edit';
    if (this.isEditMode) {
      this.getContractor();
    }
  }

  getContractor(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contractorService.contractorInfo({ id })
      .subscribe(contractor => {
        console.table(contractor);
        this.contractor = contractor as Contractor;
        this.contractorForm.patchValue(this.contractor);
      });
  }

  goBack(): void {
    this.location.back();
  }
  
  deleteContact(i: number): void {
    throw new Error('not implemented yet');
  }

}
