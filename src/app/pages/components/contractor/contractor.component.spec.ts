import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from '../paginator/paginator.component';

import { ContractorComponent } from './contractor.component';

describe('ContractorComponent', () => {
  let component: ContractorComponent;
  let fixture: ComponentFixture<ContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommonModule,
        FormsModule,
      ],
      declarations: [
        ContractorComponent,
        PaginatorComponent
      ]
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
