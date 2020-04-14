import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblesungComponent } from './ablesung.component';

describe('AblesungComponent', () => {
  let component: AblesungComponent;
  let fixture: ComponentFixture<AblesungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblesungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblesungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
