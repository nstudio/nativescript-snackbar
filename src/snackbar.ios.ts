import { DismissReasons, SnackBarOptions } from './snackbar.common';
import { Color } from 'tns-core-modules/color/color';
import { View } from 'tns-core-modules/ui/core/view';
import { Subject } from 'rxjs';
export * from './snackbar.common';

declare let TTGSnackbar;

export class SnackBar {
  private dismiss$: Subject<void> = new Subject();
  private newSnack$: Subject<void> = new Subject();

  public simple(
    snackText: string,
    textColor?: string,
    backgroundColor?: string,
    maxLines?: number,
    isRTL?: boolean,
    view?: View
  ) {
    this.newSnack$.next();
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

      this.dismiss$.subscribe(() => {
        reason = DismissReasons.MANUAL;
        snackbar.dismiss();
      });

      this.newSnack$.subscribe(() => {
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

    this.newSnack$.next();
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

      this.dismiss$.subscribe(() => {
        reason = DismissReasons.MANUAL;
        snackbar.dismiss();
      });

      this.newSnack$.subscribe(() => {
        reason = DismissReasons.CONSECUTIVE;
        snackbar.dismiss();
      });
    });
  }

  async dismiss(): Promise<void> {
    this.dismiss$.next();
  }
}
