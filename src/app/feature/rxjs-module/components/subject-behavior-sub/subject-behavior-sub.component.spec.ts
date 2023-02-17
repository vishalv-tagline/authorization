import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviorSubComponent } from './subject-behavior-sub.component';

describe('SubjectBehaviorSubComponent', () => {
  let component: SubjectBehaviorSubComponent;
  let fixture: ComponentFixture<SubjectBehaviorSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectBehaviorSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectBehaviorSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
