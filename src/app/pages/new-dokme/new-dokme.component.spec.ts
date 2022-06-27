import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDokmeComponent } from './new-dokme.component';

describe('NewDokmeComponent', () => {
  let component: NewDokmeComponent;
  let fixture: ComponentFixture<NewDokmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDokmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDokmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
