import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtaLoginComponent } from './hta-login.component';

describe('HtaLoginComponent', () => {
  let component: HtaLoginComponent;
  let fixture: ComponentFixture<HtaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtaLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
