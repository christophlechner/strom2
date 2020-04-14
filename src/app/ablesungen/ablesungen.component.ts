import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ablesung } from '../shared/model/ablesung';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ablesungen',
  templateUrl: './ablesungen.component.html',
  styleUrls: ['./ablesungen.component.css']
})
export class AblesungenComponent implements OnInit {
  
  ablesungen$: Observable<Ablesung[]>;
  
  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.ablesungen$ = this.firestore.collection<Ablesung>('ablesungen'/*, ref => ref.where('jahr', '==', 2020)*/)
      .valueChanges({'idField': 'docId'}).pipe(
        map(ablesungen => this.sortAblesungen(ablesungen))
      );
  }

  private sortAblesungen(ablesungen: Ablesung[]): Ablesung[] {
    const sorted = [...ablesungen];
    sorted.sort((a, b) => a.jahr*100+a.monat > b.jahr*100+b.monat ? -1 : 1);
    return sorted;
  }

}
