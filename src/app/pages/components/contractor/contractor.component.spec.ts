import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorComponent } from './contractor.component';

describe('ContractorComponent', () => {
  let component: ContractorComponent;
  let fixture: ComponentFixture<ContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ContractorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
