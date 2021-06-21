import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBooklistComponent } from './home-booklist.component';

describe('HomeBooklistComponent', () => {
  let component: HomeBooklistComponent;
  let fixture: ComponentFixture<HomeBooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBooklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
