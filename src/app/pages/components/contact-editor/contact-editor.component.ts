import { ContractorService } from './../../../api/services/contractor.service';
import { Contact } from './../../../api/custom_models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.scss']
})
export class ContactEditorComponent implements OnInit {

  @Input() contact: Partial<Contact> = {};
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contractorService: ContractorService,
  ) {
    this.contactForm = this.fb.group({
      name_f: ['', [Validators.required]],
      name_i: ['', [Validators.required]],
      name_o: ['', [Validators.required]],
      position: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobile_phone: ['', []],
      email: ['', [Validators.required]],
      skype: ['', []],
      whatsapp: ['', []],
      telegram: ['', []],
      wechat: ['', []],
      responsible_direction: [{}]
    });
  }

  ngOnInit(): void {
    if (this.contact) {
      this.contactForm.patchValue(this.contact);
    }
  }
  
  get isEditMode(): boolean {
    return typeof this.contact.id === 'number'
  }

  save(): void {
    const body = {
      ... this.contactForm.value,
      id: this.contact.id
    };
    this.contractorService.contractorContactUpdate({ body }).subscribe(
      {
        next: () => console.log(`contact saved`),
        error: (err) => console.log(`failed to save contact`, err),
      }
    )
  }

  create(): void {
    const body = {
      ... this.contactForm.value,
      contractor_id: this.contact.contractor_id
    };
    this.contractorService.contractorContactCreate({ body }).subscribe(
      {
        next: ({id}) => {
          this.contact.id = id; 
          console.log(`contact created, id: `, id);
        },
        error: (err) => console.log(`failed to save contact`, err),
      }
    )
  }

}
