import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseExpComponent } from './promise-exp.component';

describe('PromiseExpComponent', () => {
  let component: PromiseExpComponent;
  let fixture: ComponentFixture<PromiseExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
