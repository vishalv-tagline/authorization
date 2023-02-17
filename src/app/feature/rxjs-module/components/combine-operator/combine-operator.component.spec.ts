import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineOperatorComponent } from './combine-operator.component';

describe('CombineOperatorComponent', () => {
  let component: CombineOperatorComponent;
  let fixture: ComponentFixture<CombineOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
