import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffFromComponent } from './off-from.component';

describe('OffFromComponent', () => {
  let component: OffFromComponent;
  let fixture: ComponentFixture<OffFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
