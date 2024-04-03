import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {
  readonly APIUrl = "http://localhost:5038/api/NotesApp/";
  listOfNotes: any;


  constructor(private router: Router,private http: HttpClient) {
    this.getNotes();
  }


  listPageBackButton(){
    this.router.navigate(['']);
  }
  getNotes(){
    this.http.get(this.APIUrl + 'GetNotes').subscribe(data => {
      this.listOfNotes = data;
      console.log("notes....", this.listOfNotes)
    })

  }
}
