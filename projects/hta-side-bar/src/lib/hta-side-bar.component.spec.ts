import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtaSideBarComponent } from './hta-side-bar.component';

describe('HtaSideBarComponent', () => {
  let component: HtaSideBarComponent;
  let fixture: ComponentFixture<HtaSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtaSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtaSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
