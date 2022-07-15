import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCodeComponent } from './check-code.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialModule} from "../../../material/material.module";

describe('CheckCodeComponent', () => {
  let component: CheckCodeComponent;
  let fixture: ComponentFixture<CheckCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [ CheckCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
