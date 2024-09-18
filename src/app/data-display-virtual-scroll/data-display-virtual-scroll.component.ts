import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-data-display-virtual-scroll',
  standalone: true,
  imports: [ScrollingModule],
  template: `
    <cdk-virtual-scroll-viewport
      itemSize="50"
      class="example-viewport"
      autosize
    >
      <div *cdkVirtualFor="let item of items" class="example-item">
        {{ item.id }}: {{ item.title }}
      </div>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [
    `
      .example-viewport {
        height: 100vw;
        width: 100vw;
      }

      .example-item {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    `,
  ],
})
export class DataDisplayVirtualScrollComponent implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDataVirtualScroll().subscribe((res) => {
      this.items = res;
    });
  }
}
