import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingComponent } from '../rating/rating.component';

import { ContractorEditorComponent } from './contractor-editor.component';

describe('ContractorEditorComponent', () => {
  let component: ContractorEditorComponent;
  let fixture: ComponentFixture<ContractorEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [ ContractorEditorComponent, RatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
