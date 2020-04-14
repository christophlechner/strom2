import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(
    private snackBar: MatSnackBar
  ) { }

  info(msg: string) {
    this.snackBar.open(msg);
  }

  error(msg: string) {
    this.snackBar.open(msg);
  }

}
