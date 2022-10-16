import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidcompoComponent } from './midcompo.component';

describe('MidcompoComponent', () => {
  let component: MidcompoComponent;
  let fixture: ComponentFixture<MidcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidcompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
