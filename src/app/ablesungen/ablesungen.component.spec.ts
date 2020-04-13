import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblesungenComponent } from './ablesungen.component';

describe('AblesungenComponent', () => {
  let component: AblesungenComponent;
  let fixture: ComponentFixture<AblesungenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblesungenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblesungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
