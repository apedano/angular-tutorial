import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNestedComponent } from './server-nested.component';

describe('ServerNestedComponent', () => {
  let component: ServerNestedComponent;
  let fixture: ComponentFixture<ServerNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerNestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
