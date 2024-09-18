import { Routes } from '@angular/router';
import { DataDisplayInfiniteScrollComponent } from './data-display-infinite-scroll/data-display-infinite-scroll.component';
import { DataDisplayVirtualScrollComponent } from './data-display-virtual-scroll/data-display-virtual-scroll.component';

export const routes: Routes = [
  {
    path: 'infiniteScroll',
    component: DataDisplayInfiniteScrollComponent,
  },
  {
    path: 'virtualScroll',
    component: DataDisplayVirtualScrollComponent,
  },
];
