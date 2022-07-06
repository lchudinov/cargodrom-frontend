import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorFilterComponent } from './contractor-filter.component';

describe('ContractorFilterComponent', () => {
  let component: ContractorFilterComponent;
  let fixture: ComponentFixture<ContractorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
