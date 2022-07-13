import { ContractorService } from './../../api/services/contractor.service';
import { Injectable } from '@angular/core';
import { connect, Observable, zip, tap, map } from 'rxjs';
import { Contact, ContactList } from '../../api/custom_models';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private contactList: ContactList = [];



  constructor(
    private contactorService: ContractorService
  ) { }

  setContacts(contacts: Partial<Contact>[]): void {
    this.contactList = contacts.map(c => ({ status: 'old', contact: c }))
  }

  removeByIndex(i: number) {
    const contacts = this.contactList.filter(c => c.status === 'old' || c.status === 'new');
    const contact = contacts[i];
    contact.status = contact.status === 'new' ? 'never' : 'removed';
  }

  addContact(contact: Partial<Contact>): void {
    this.contactList.push({
      status: 'new',
      contact
    });
  }

  setContractorId(id: number): void {
    this.contactList.forEach(contact => contact.contact.contractor_id = id);
  }

  get count(): number {
    return this.contactList.filter(c => c.status === 'old' || c.status === 'new').length;
  }

  get contacts(): Partial<Contact>[] {
    return this.contactList.filter(c => c.status === 'old' || c.status === 'new').map(c => c.contact);
  }

  saveContacts(contractorId?: number): Observable<void> {
    if (contractorId) {
      this.setContractorId(contractorId);
    }
    const newContacts = this.contactList.filter(c => c.status === 'new');
    const oldContacts = this.contactList.filter(c => c.status === 'old');
    const removedContacts = this.contactList.filter(c => c.status === 'removed');

    const newContactObservables = newContacts.map(c => this.createContact(c.contact).pipe(tap(() => c.status = 'old')));
    const oldContactObservables = oldContacts.map(c => this.updateContact(c.contact));
    const removedContactObservables = removedContacts.map(c => this.removeContact(c.contact).pipe(tap(() => c.status = 'never')));

    return zip(...newContactObservables, ...oldContactObservables, ...removedContactObservables).pipe(map(() => undefined));
  }

  createContact(contact: Partial<Contact>) {
    const body = contact as Contact;
    return this.contactorService.contractorContactCreate({ body }).pipe(
      tap(res => contact.id = res.id),
    );
  }

  removeContact(contact: Partial<Contact>) {
    return this.contactorService.contractorContactDelete({ body: { id: contact.id! } });
  }

  updateContact(contact: Partial<Contact>) {
    const body = contact as Contact;
    return this.contactorService.contractorContactUpdate({ body });
  }

}
