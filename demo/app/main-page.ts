import { Color } from '@nativescript/core/color';
import { EventData } from '@nativescript/core/data/observable';
import { Page } from '@nativescript/core/ui/page';
import { HelloWorldModel } from './main-view-model';

// Event handler for Page "navigatedTo" event attached in main-page.xml
export function onPageNavigatedTo(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new HelloWorldModel(page);
  page.androidStatusBarBackground = new Color('#5812a8');
}
