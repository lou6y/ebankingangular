import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCompaignComponent } from './dialog-compaign.component';

describe('DialogCompaignComponent', () => {
  let component: DialogCompaignComponent;
  let fixture: ComponentFixture<DialogCompaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCompaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
