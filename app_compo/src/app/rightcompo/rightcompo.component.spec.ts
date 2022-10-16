import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcompoComponent } from './rightcompo.component';

describe('RightcompoComponent', () => {
  let component: RightcompoComponent;
  let fixture: ComponentFixture<RightcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightcompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
