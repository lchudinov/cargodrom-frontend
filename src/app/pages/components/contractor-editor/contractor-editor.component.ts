import { tap } from 'rxjs';
import { City } from './../../../api/custom_models/city';
import { DirectionService } from './../../../api/services/direction.service';
import { Association } from './../../../api/custom_models/association';
import { Country } from './../../../api/custom_models/country';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contractor, ContractorRequestFormat, ContractorType } from './../../../api/custom_models/contractor';
import { ContractorService } from './../../../api/services/contractor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contractor-editor',
  templateUrl: './contractor-editor.component.html',
  styleUrls: ['./contractor-editor.component.scss'],
})
export class ContractorEditorComponent implements OnInit {

  contractor: Partial<Contractor> = {};
  isEditMode: boolean = false;
  contractorForm: FormGroup;
  associations: Association[] = [];
  contractorTypes: ContractorType[] = [];
  countries: Country[] = [];
  cities: Partial<City>[] = [];
  snackBarOptions: MatSnackBarConfig = { duration: 3000 };
  requestFormats: ContractorRequestFormat[] = [];

  constructor(
    private route: ActivatedRoute,
    private contractorService: ContractorService,
    private directionService: DirectionService,
    private location: Location,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
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
      contacts: fb.array([]),
      association_id: [[]],
      tax_id: [undefined, [Validators.required]],
      type_id: [undefined, [Validators.required]],
      language_id: [undefined, [Validators.required]],
      country_id: ['', [Validators.required]],
      city_id: ['', [Validators.required]],
      request_format_id: ['', [Validators.required]],
      exclude_from_trade: [false]
    });
  }

  ngOnInit(): void {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.isEditMode = segments[1] === 'edit';
    if (this.isEditMode) {
      this.getContractor();
    }
    this.getContractorTypes();
    this.getAssociations();
    this.getCountries();
    this.getRequestFormats();
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
    if (typeof this.contractor.id === 'number') {
      this.updateContractor(body);
    } else {
      this.createContractor(body);
    }
  }

  get assocAsText(): string {
    const ids: string[] = this.contractorForm.controls['association_id'].value || [];
    return ids.map(id => this.associations.find(a => a.id === id)?.name).join(', ');
  }

  onCountryChange(countryId: number): void {
    this.contractorForm.controls['city_id'].reset(undefined);
    this.getCities(countryId);
  }

  private updateContractor(body: any) {
    this.contractorService.contractorUpdate({ body }).pipe().subscribe({
      next: () => this.snackBar.open(`Подрядчик сохранен`, undefined, this.snackBarOptions),
      error: (err) => this.snackBar.open(`Ошибка сохранения подрядчика: ` + err.error.error_message, undefined, this.snackBarOptions)
    });
  }

  private createContractor(body: any) {
    this.contractorService.contractorCreate({ body }).pipe().subscribe({
      next: ({ id }: { id: number }) => {
        this.contractor.id = id;
        this.contractorForm.controls['id'].setValue(id);
        this.snackBar.open(`Подрядчик создан`, undefined, this.snackBarOptions)
      },
      error: (err) => this.snackBar.open(`Ошибка создания подрядчика: ` + err.error.error_message, undefined, this.snackBarOptions)
    });
  }
  private getAssociations() {
    this.contractorService.contractorAssociation()
      .subscribe(associations => this.associations = associations as Association[]);
  }

  private getContractorTypes() {
    this.contractorService.contractorType()
      .subscribe(contractorTypes => this.contractorTypes = contractorTypes as ContractorType[]);
  }

  private getCountries() {
    this.directionService.directionCountryList()
      .subscribe(countries => this.countries = countries);
  }

  private getRequestFormats(): void {
    this.contractorService.contractorRequestFormat()
      .pipe(tap(console.table))
      .subscribe(formats => this.requestFormats = formats);
  }

  private getCities(countryId: number) {
    this.directionService.directionCityList({ country_id: countryId })
      .pipe(tap(console.table))
      .subscribe(cities => this.cities = cities);
  }

  private getContractor(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contractorService.contractorInfo({ id })
      .subscribe(contractor => {
        console.table(contractor);
        this.contractor = contractor as Contractor;
        const contactsControls = this.contacts;
        this.contractor.contacts?.forEach(contact => contact.contractor_id = contractor.id);
        this.contractor.contacts?.forEach(contact => contactsControls.push(this.fb.control(contact)));
        this.contractorForm.patchValue(this.contractor);
        if (typeof contractor.country_id === 'number') {
          this.getCities(contractor.country_id);
        }
      });
  }

}
