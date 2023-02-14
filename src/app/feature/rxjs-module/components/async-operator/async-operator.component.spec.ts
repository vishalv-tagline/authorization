import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncOperatorComponent } from './async-operator.component';

describe('AsyncOperatorComponent', () => {
  let component: AsyncOperatorComponent;
  let fixture: ComponentFixture<AsyncOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
