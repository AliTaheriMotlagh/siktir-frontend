import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar, private zone: NgZone) {}

  OpenSuccess(msg: string) {
    this.zone.run(() => {
      this._snackBar.open(msg, 'OK', { duration: 5000 });
    });
  }
  OpenError(msg: string) {
    this.zone.run(() => {
      this._snackBar.open(msg, 'OK', { duration: 5000 });
    });
  }
}
