import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayOperatorComponent } from './replay-operator.component';

describe('ReplayOperatorComponent', () => {
  let component: ReplayOperatorComponent;
  let fixture: ComponentFixture<ReplayOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplayOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
