import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InEarsComponent } from './in-ears.component';

describe('InEarsComponent', () => {
  let component: InEarsComponent;
  let fixture: ComponentFixture<InEarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InEarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InEarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
