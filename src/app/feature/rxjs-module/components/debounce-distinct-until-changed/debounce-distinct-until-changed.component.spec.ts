import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceDistinctUntilChangedComponent } from './debounce-distinct-until-changed.component';

describe('DebounceDistinctUntilChangedComponent', () => {
  let component: DebounceDistinctUntilChangedComponent;
  let fixture: ComponentFixture<DebounceDistinctUntilChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceDistinctUntilChangedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceDistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
