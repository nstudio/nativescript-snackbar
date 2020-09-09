import { Component, OnInit } from '@angular/core';
import { SnackBar } from '@nstudio/nativescript-snackbar';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'ns-items',
  moduleId: module.id,
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  // This pattern makes use of Angular’s dependency injection implementation to
  // inject an instance of the ItemService service into this class.
  // Angular knows about this service because it is included in your app’s main NgModule,
  // defined in app.module.ts.
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  onItemTap(event) {
    console.log('item tap');
    const sb = new SnackBar();
    sb.simple('Hello from Snackbar', '#fff000', '#111').then((result) => {
      console.log('snackbar resolve', result);
    });
  }
}
