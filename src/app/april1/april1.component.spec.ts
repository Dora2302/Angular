import { ComponentFixture, TestBed } from '@angular/core/testing';

import { April1Component } from './april1.component';

describe('April1Component', () => {
  let component: April1Component;
  let fixture: ComponentFixture<April1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ April1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(April1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
