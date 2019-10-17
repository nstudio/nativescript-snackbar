import { DismissReasons, SnackBarOptions } from './snackbar.common';
import { Color } from 'tns-core-modules/color/color';
export * from './snackbar.common';

declare let TTGSnackbar;

export class SnackBar {
  public async simple(snackText: string) {
    const snackbar = new TTGSnackbar({
      message: snackText,
      duration: 3
    });
    snackbar.show();
    return;
  }

  public async action(options: SnackBarOptions) {
    return;
    // try {
    //   if (!options.hideDelay) options.hideDelay = 3000;
    //   this._snackbar = SSSnackbar.snackbarWithMessageActionTextDurationActionBlockDismissalBlock(
    //     options.snackText,
    //     options.actionText,
    //     options.hideDelay / 1000,
    //     args => {
    //       resolve({
    //         command: 'Action',
    //         event: args
    //       });
    //     },
    //     args => {
    //       const reason = this._isDismissedManual
    //         ? DismissReasons.MANUAL
    //         : DismissReasons.TIMEOUT;
    //       this._isDismissedManual = false; // reset
    //       resolve({
    //         command: 'Dismiss',
    //         reason: reason,
    //         event: args
    //       });
    //     }
    //   );
    //   this._snackbar.show();
    // } catch (ex) {
    //   reject(ex);
    // }
  }

  dismiss(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  // public dismiss(options) {
  //   return new Promise((resolve, reject) => {
  //     if (this._snackbar !== null && this._snackbar !== 'undefined') {
  //       try {
  //         this._isDismissedManual = true;
  //         this._snackbar.dismiss();
  //         // Return AFTER the item is dismissed, 200ms delay
  //         setTimeout(() => {
  //           resolve({
  //             action: 'Dismiss',
  //             reason: DismissReasons.MANUAL
  //           });
  //         }, 200);
  //       } catch (ex) {
  //         reject(ex);
  //       }
  //     } else {
  //       resolve({
  //         action: 'None',
  //         message: 'No actionbar to dismiss'
  //       });
  //     }
  //   });
  // }
}
