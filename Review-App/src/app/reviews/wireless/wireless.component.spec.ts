import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessComponent } from './wireless.component';

describe('WirelessComponent', () => {
  let component: WirelessComponent;
  let fixture: ComponentFixture<WirelessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WirelessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WirelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
