import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ablesung } from '../shared/model/ablesung';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore/public_api';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { NotificationService } from '../shared/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../shared/components/confirm.component';

@Component({
  selector: 'app-ablesung',
  templateUrl: './ablesung.component.html',
  styleUrls: ['./ablesung.component.css']
})
export class AblesungComponent implements OnInit {

  private ablesungDoc: AngularFirestoreDocument<Ablesung>;

  private ablesungenCollection: AngularFirestoreCollection<Ablesung>;

  ablesungForm = this.fb.group({
    jahr: [null, Validators.required],
    monat: [null, Validators.required],
    f1: [null, Validators.required],
    f2: [null, Validators.required],
    f3: [null, Validators.required]
  });

  monate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  get isNew() {
    return this.ablesungDoc == null;
  }

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.ablesungenCollection = afs.collection<Ablesung>('ablesungen');
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap(params => {
        const id = params.get('id');
        delete this.ablesungDoc;
        if (id === 'new') {
          this.initForm();
        } else {
          this.initFormById(id);
        }
      })
    ).subscribe();
  }

  private initForm() {
    this.ablesungForm.patchValue({
      jahr: new Date().getFullYear(),
      monat: new Date().getMonth()
    });
  }

  private initFormById(docId: string) {
    this.ablesungForm.controls['jahr'].disable();
    this.ablesungForm.controls['monat'].disable();
    this.ablesungDoc = this.afs.doc('ablesungen/' + docId);
    this.ablesungDoc.valueChanges().subscribe(val => {
      this.ablesungForm.patchValue(val ? val : {});
    });
  }

  onSubmit() {
    const formValue = this.ablesungForm.value;
    if (this.ablesungDoc != null) {
      this.ablesungDoc.update(formValue)
      .then(() => this.success('Gespeichert'))
      .catch(err => this.error(err));
    } else {
      this.ablesungenCollection.add(formValue)
        .then(() => this.success('Gespeichert'))
        .catch(err => this.error(err));
    }
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: "Ablesung löschen?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.ablesungDoc.delete()
          .then(() => this.success('Gelöscht'))
          .catch(this.error);
          }
    });
  }

  private success(msg: string) {
    this.notificationService.info(msg);
    this.router.navigate(['/ablesungen']);
  }

  private error(err: string) {
    this.notificationService.error(err);
  }

}
