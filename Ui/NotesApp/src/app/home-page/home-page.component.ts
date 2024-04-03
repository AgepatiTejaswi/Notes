import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  title = 'NotesApp';
  readonly APIUrl = "http://localhost:5038/api/NotesApp/"



  profileForm = new FormGroup({
    notesArea: new FormControl('')

  });

  constructor(private http: HttpClient,private router: Router) {
    this.refreshNotes();
  }
  notes: any = [];
  refreshNotes() {
    console.log("Refresh")
    this.http.get(this.APIUrl + 'GetNotes').subscribe(data => {
      this.notes = data;
      console.log("notes....", this.notes)
    })
  }

  newNotes: any = [];

  onSubmit() {
    
    console.log("Data....", this.profileForm.value.notesArea);
   this.newNotes =this.profileForm.value.notesArea ;
    var formData = new FormData();
    formData.append("description",this.newNotes );
    console.log("formData....",formData)
    this.http.post(this.APIUrl + 'AddNotes', formData).subscribe(data => {
      this.notes = data;
      this.router.navigate(['']);
      console.log("notes....", this.notes)
    })
  }

  ngOninit() {

  }
  backButton(){
    this.router.navigate(['']);
  }
}
