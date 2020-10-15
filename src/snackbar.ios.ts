import { Color, View } from '@nativescript/core';
import { Subject } from 'rxjs';
import { DismissReasons, SnackBarOptions } from './snackbar.common';
export * from './snackbar.common';

export class SnackBar {
  private dismissEvent$: Subject<void> = new Subject();
  private newSnackEvent$: Subject<void> = new Subject();

  public simple(
    snackText: string,
    textColor?: string,
    backgroundColor?: string,
    maxLines?: number,
    isRTL?: boolean,
    view?: View,
    padding?: number
  ) {
    // Notify new snackbar creation
    this.newSnackEvent$.next();

    return new Promise(resolve => {
      const duration = 3;
      let reason: DismissReasons = null;
      const snackbar = new TTGSnackbar({ message: snackText, duration });
      snackbar.shouldDismissOnSwipe = true;

      if (textColor && Color.isValid(textColor)) {
        snackbar.messageTextColor = new Color(textColor).ios;
      }
      if (backgroundColor && Color.isValid(backgroundColor)) {
        snackbar.backgroundColor = new Color(backgroundColor).ios;
      }
      if (isRTL) snackbar.messageTextAlign = 2;

      if (padding) {
        snackbar.contentInset = new UIEdgeInsets({top: padding, left: padding, bottom: padding, right: padding});
      }

      snackbar.show();

      // callbacks
      snackbar.dismissBlock = args => {
        // avoid memory leaks
        dismissSubscription.unsubscribe();
        newSnackSubscription.unsubscribe();

        resolve({
          event: args,
          command: 'Dismiss',
          reason: reason ? reason : DismissReasons.TIMEOUT
        });
      };

      snackbar.onSwipeBlock = () => {
        reason = DismissReasons.SWIPE;
        snackbar.dismiss();
      };

      // subscriptions
      const dismissSubscription = this.dismissEvent$.subscribe(() => {
        reason = DismissReasons.MANUAL;
        snackbar.dismiss();
      });

      const newSnackSubscription = this.newSnackEvent$.subscribe(() => {
        reason = DismissReasons.CONSECUTIVE;
        snackbar.dismiss();
      });
    });
  }

  public async action(options: SnackBarOptions) {
    const {
      actionText,
      snackText,
      actionTextColor,
      textColor,
      backgroundColor,
      isRTL,
      hideDelay,
      padding
    } = options;

    this.newSnackEvent$.next();
    return new Promise(resolve => {
      let reason: DismissReasons = null;
      const duration = hideDelay ? hideDelay / 1000 : 3;

      const snackbar = new TTGSnackbar({ message: snackText, duration });
      snackbar.shouldDismissOnSwipe = true;

      if (textColor && Color.isValid(textColor)) {
        snackbar.messageTextColor = new Color(textColor).ios;
      }
      if (backgroundColor && Color.isValid(backgroundColor)) {
        snackbar.backgroundColor = new Color(backgroundColor).ios;
      }
      if (isRTL) snackbar.messageTextAlign = 2;

      if (padding) {
        snackbar.contentInset = new UIEdgeInsets({top: padding, left: padding, bottom: padding, right: padding});
      }

      snackbar.actionText = actionText;
      if (actionTextColor && Color.isValid(actionTextColor)) {
        snackbar.actionTextColor = new Color(actionTextColor).ios;
      }
      snackbar.actionBlock = () => (reason = DismissReasons.ACTION);

      snackbar.show();

      // callbacks
      snackbar.dismissBlock = args => {
        // avoid memory leaks
        dismissSubscription.unsubscribe();
        newSnackSubscription.unsubscribe();

        resolve({
          event: args,
          command: 'Dismiss',
          reason: reason ? reason : DismissReasons.TIMEOUT
        });
      };

      snackbar.onSwipeBlock = () => {
        reason = DismissReasons.SWIPE;
        snackbar.dismiss();
      };

      // subscriptions
      const dismissSubscription = this.dismissEvent$.subscribe(() => {
        reason = DismissReasons.MANUAL;
        snackbar.dismiss();
      });

      const newSnackSubscription = this.newSnackEvent$.subscribe(() => {
        reason = DismissReasons.CONSECUTIVE;
        snackbar.dismiss();
      });
    });
  }

  async dismiss(): Promise<void> {
    this.dismissEvent$.next();
  }
}
