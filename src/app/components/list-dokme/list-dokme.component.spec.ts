import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDokmeComponent } from './list-dokme.component';

describe('ListDokmeComponent', () => {
  let component: ListDokmeComponent;
  let fixture: ComponentFixture<ListDokmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDokmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDokmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
