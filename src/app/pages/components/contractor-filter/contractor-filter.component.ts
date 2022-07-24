import { Country } from './../../../api/custom_models/country';
import { DirectionService } from './../../../api/services/direction.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContractorFilter } from './../../../api/custom_models/contractor-filter';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contractor-filter',
  templateUrl: './contractor-filter.component.html',
  styleUrls: ['./contractor-filter.component.scss']
})
export class ContractorFilterComponent implements OnInit {
  @Output() change = new EventEmitter<Omit<ContractorFilter, 'start' | 'count'>>();
  filterForm: FormGroup;
  countries: Country[] = [];
  ratings = new Array(11);

  constructor(
    private fb: FormBuilder,
    private directionService: DirectionService,
  ) {
    this.filterForm = fb.group({
      allow_trade: [undefined],
      country_departure: [undefined],
      country_arrival: [undefined],
      rating: [0]
    });
  }

  ngOnInit(): void {
    this.getCountries();
  }

  apply(): void {
    if (this.filterForm.dirty) {
      const filter = this.filterForm.value;
      this.change.emit(filter);
    }
  }

  reset(): void {
    this.filterForm.reset();
  }

  private getCountries() {
    this.directionService.directionCountryList()
      .subscribe(countries => this.countries = countries);
  }

}
