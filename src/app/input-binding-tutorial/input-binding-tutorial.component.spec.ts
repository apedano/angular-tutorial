import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingTutorialComponent } from './input-binding-tutorial.component';

describe('InputBindingTutorialComponent', () => {
  let component: InputBindingTutorialComponent;
  let fixture: ComponentFixture<InputBindingTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBindingTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBindingTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
