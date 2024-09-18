import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayInfiniteScrollComponent } from './data-display-infinite-scroll.component';

describe('DataDisplayInfiniteScrollComponent', () => {
  let component: DataDisplayInfiniteScrollComponent;
  let fixture: ComponentFixture<DataDisplayInfiniteScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDisplayInfiniteScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDisplayInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
