import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpDetailComponent } from './dp-detail.component';

describe('DpDetailComponent', () => {
  let component: DpDetailComponent;
  let fixture: ComponentFixture<DpDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
