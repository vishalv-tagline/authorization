import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapOperatorComponent } from './tap-operator.component';

describe('TapOperatorComponent', () => {
  let component: TapOperatorComponent;
  let fixture: ComponentFixture<TapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
