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

  @Input() contact?: Contact;
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

  save(): void {
    this.contractorService.contractorContactUpdate({ body: this.contactForm.value }).subscribe(
      {
        next: () => console.log(`contact saved`),
        error: (err) => console.log(`failed to save contact`, err),
      }
    )
  }

}
