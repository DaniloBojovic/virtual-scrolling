import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayVirtualScrollComponent } from './data-display-virtual-scroll.component';

describe('DataDisplayVirtualScrollComponent', () => {
  let component: DataDisplayVirtualScrollComponent;
  let fixture: ComponentFixture<DataDisplayVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDisplayVirtualScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDisplayVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
