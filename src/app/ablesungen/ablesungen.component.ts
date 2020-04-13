import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ablesungen',
  templateUrl: './ablesungen.component.html',
  styleUrls: ['./ablesungen.component.css']
})
export class AblesungenComponent implements OnInit {
  
  items$: Observable<any[]>;
  
  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.items$ = this.firestore.collection('items').valueChanges();
  }

}
