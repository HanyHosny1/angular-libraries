import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtaTableComponent } from './hta-table.component';

describe('HtaTableComponent', () => {
  let component: HtaTableComponent;
  let fixture: ComponentFixture<HtaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtaTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
