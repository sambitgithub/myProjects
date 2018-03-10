import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktoppageComponent } from './desktoppage.component';

describe('DesktoppageComponent', () => {
  let component: DesktoppageComponent;
  let fixture: ComponentFixture<DesktoppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktoppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktoppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
