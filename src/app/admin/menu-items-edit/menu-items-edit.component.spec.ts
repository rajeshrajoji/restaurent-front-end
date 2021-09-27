import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsEditComponent } from './menu-items-edit.component';

describe('MenuItemsEditComponent', () => {
  let component: MenuItemsEditComponent;
  let fixture: ComponentFixture<MenuItemsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
