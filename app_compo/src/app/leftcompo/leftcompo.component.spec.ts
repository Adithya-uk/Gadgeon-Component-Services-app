import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftcompoComponent } from './leftcompo.component';

describe('LeftcompoComponent', () => {
  let component: LeftcompoComponent;
  let fixture: ComponentFixture<LeftcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftcompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
