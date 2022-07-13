import { ContactListService } from './../../services/contact-list.service';
import { Contact, ContactList } from './../../../api/custom_models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contractor } from './../../../api/custom_models/contractor';
import { ContractorService } from './../../../api/services/contractor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { mergeMap } from 'rxjs';

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
    private contactListService: ContactListService,
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
    } else {
      this.contactListService.setContacts([]);
    }
  }

  getContractor(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contractorService.contractorInfo({ id })
      .subscribe(contractor => {
        console.table(contractor);
        this.contractor = contractor as Contractor;
        this.contractorForm.patchValue(this.contractor);
        this.contactListService.setContacts(this.contractor.contacts || []);
      });
  }

  goBack(): void {
    this.location.back();
  }

  removeContact(i: number): void {
    this.contactListService.removeByIndex(i);
  }

  addContact() {
    this.contactListService.addContact({ contractor_id: this.contractor.id! });
  }

  get contacts(): Partial<Contact>[] {
    return this.contactListService.contacts;
  }

  save(): void {
    const body = { ...this.contractorForm.value, id: this.contractor.id! };
    this.contractorService.contractorUpdate({ body }).pipe(
      mergeMap(() => this.contactListService.saveContacts())
    ).subscribe({
      next: () => console.log(`contractor saved`),
      error: (err) => console.log(`failed to save contractor`, err)
    });
  }
}
