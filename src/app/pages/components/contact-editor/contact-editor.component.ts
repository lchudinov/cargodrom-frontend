import { ContractorService } from './../../../api/services/contractor.service';
import { Contact } from './../../../api/custom_models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.scss']
})
export class ContactEditorComponent implements OnInit, OnDestroy {

  @Input() contact: Partial<Contact> = {};
  contactForm: FormGroup;
  destroy$ = new Subject<void>();

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
    this.contactForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => Object.assign(this.contact, value || {}));
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get isEditMode(): boolean {
    return typeof this.contact.id === 'number'
  }

}
