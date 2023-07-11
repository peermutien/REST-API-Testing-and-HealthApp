import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDynamicComponent } from './health-dynamic.component';

describe('HealthDynamicComponent', () => {
  let component: HealthDynamicComponent;
  let fixture: ComponentFixture<HealthDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
