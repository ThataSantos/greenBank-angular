import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiminDashboardComponent } from './adimin-dashboard.component';

describe('AdiminDashboardComponent', () => {
  let component: AdiminDashboardComponent;
  let fixture: ComponentFixture<AdiminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdiminDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdiminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
