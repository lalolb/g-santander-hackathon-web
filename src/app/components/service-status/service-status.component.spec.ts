import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStatusComponent } from './service-status.component';

describe('ServiceStatusComponent', () => {
  let component: ServiceStatusComponent;
  let fixture: ComponentFixture<ServiceStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceStatusComponent]
    });
    fixture = TestBed.createComponent(ServiceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
