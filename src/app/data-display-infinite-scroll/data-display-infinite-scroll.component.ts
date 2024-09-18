import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { DataService } from '../data.service';

export interface Item {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-data-display-infinite-scroll',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item.id }}: {{ item.title }}</li>
    </ul>
    <div *ngIf="loading">Loading...</div>
  `,
  styles: ``,
})
export class DataDisplayInfiniteScrollComponent {
  items: Item[] = [];
  page = 1;
  loading = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - 500;

    if (scrollPosition >= threshold && !this.loading) {
      this.page++;
      this.loadData();
    }
  }

  loadData() {
    debugger;
    this.loading = true;
    this.dataService.getDataPaged(this.page, 50).subscribe((res) => {
      this.items = [...this.items, ...res];
      this.loading = false;
    });
  }
}
