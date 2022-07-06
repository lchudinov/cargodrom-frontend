import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorEditorComponent } from './contractor-editor.component';

describe('ContractorEditorComponent', () => {
  let component: ContractorEditorComponent;
  let fixture: ComponentFixture<ContractorEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorEditorComponent ]
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
