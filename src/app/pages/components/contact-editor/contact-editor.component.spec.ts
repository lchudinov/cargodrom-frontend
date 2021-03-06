import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TradeDirectionComponent } from './../trade-direction/trade-direction.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditorComponent } from './contact-editor.component';

describe('ContactEditorComponent', () => {
  let component: ContactEditorComponent;
  let fixture: ComponentFixture<ContactEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ ContactEditorComponent, TradeDirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
