import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlukComponent } from './pluk.component';

describe('PlukComponent', () => {
  let component: PlukComponent;
  let fixture: ComponentFixture<PlukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
