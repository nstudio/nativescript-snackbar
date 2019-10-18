import { Subject } from 'rxjs';
import { Color } from 'tns-core-modules/color/color';
import { View } from 'tns-core-modules/ui/core/view';
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
    view?: View
  ) {
    // Notify new snackbar creation
    this.newSnackEvent$.next();

    return new Promise(resolve => {
      const duration = 3;
      let reason: DismissReasons = null;
      let snackbar = new TTGSnackbar({ message: snackText, duration });
      snackbar.shouldDismissOnSwipe = true;

      if (textColor && Color.isValid(textColor)) {
        snackbar.messageTextColor = new Color(textColor).ios;
      }
      if (backgroundColor && Color.isValid(backgroundColor)) {
        snackbar.backgroundColor = new Color(backgroundColor).ios;
      }
      if (isRTL) snackbar.messageTextAlign = 2;

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
      isRTL
    } = options;

    this.newSnackEvent$.next();
    return new Promise(resolve => {
      const duration = 3;
      let reason: DismissReasons = null;
      let snackbar = new TTGSnackbar({ message: snackText, duration });
      snackbar.shouldDismissOnSwipe = true;

      if (textColor && Color.isValid(textColor)) {
        snackbar.messageTextColor = new Color(textColor).ios;
      }
      if (backgroundColor && Color.isValid(backgroundColor)) {
        snackbar.backgroundColor = new Color(backgroundColor).ios;
      }
      if (isRTL) snackbar.messageTextAlign = 2;

      snackbar.actionText = actionText;
      if (actionTextColor && Color.isValid(actionTextColor)) {
        snackbar.actionTextColor = new Color(actionTextColor).ios;
      }
      snackbar.actionBlock = () => (reason = DismissReasons.ACTION);

      snackbar.show();

      //callbacks
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

      //subscriptions
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
