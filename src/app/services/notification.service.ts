import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  OpenSuccess(msg: string) {
    this._snackBar.open(msg, 'OK', { duration: 5000 });
  }
}
