import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaccountComponent } from './saccount.component';

describe('SaccountComponent', () => {
  let component: SaccountComponent;
  let fixture: ComponentFixture<SaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
