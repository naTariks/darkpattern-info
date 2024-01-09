import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechtlichComponent } from './rechtlich.component';

describe('RechtlichComponent', () => {
  let component: RechtlichComponent;
  let fixture: ComponentFixture<RechtlichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechtlichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechtlichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
