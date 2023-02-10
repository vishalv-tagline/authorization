import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerOperatorComponent } from './per-operator.component';

describe('PerOperatorComponent', () => {
  let component: PerOperatorComponent;
  let fixture: ComponentFixture<PerOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
