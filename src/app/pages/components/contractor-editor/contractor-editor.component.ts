import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contractor } from './../../../api/custom_models/contractor';
import { ContractorService } from './../../../api/services/contractor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contractor-editor',
  templateUrl: './contractor-editor.component.html',
  styleUrls: ['./contractor-editor.component.scss'],
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
      id: [''],
      address: ['', []],
      name: ['', [Validators.required]],
      ind: ['', [Validators.required]],
      city_name: ['', [Validators.required]],
      phone: ['', []],
      web: ['', []],
      rating_nps: [0, []],
      user_rating_nps: [0, []],
      contacts: fb.array([])
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
        const contactsControls = this.contacts;
        this.contractor.contacts?.forEach(contact => contact.contractor_id = contractor.id);
        this.contractor.contacts?.forEach(contact => contactsControls.push(this.fb.control(contact)));
        this.contractorForm.patchValue(this.contractor);
      });
  }

  goBack(): void {
    this.location.back();
  }

  removeContact(i: number): void {
    this.contacts.removeAt(i);
  }

  addContact() {
    this.contacts.push(this.fb.control({
      contractor_id: this.contractor.id
    }))
  }

  get contacts() {
    return <FormArray>this.contractorForm.get('contacts');
  }

  save(): void {
    const body = this.contractorForm.value;
    this.contractorService.contractorUpdate({ body }).pipe(
    ).subscribe({
      next: () => console.log(`contractor saved`),
      error: (err) => console.log(`failed to save contractor`, err)
    });
  }
}
