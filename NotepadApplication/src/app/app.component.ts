import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http:HttpClient){}

  readonly APIUrl="http://localhost:27017/api/notepad/";
  profileForm = new FormGroup({
    notes: new FormControl('')
  })
  title = 'NotepadApplication';
  ngOninit() { }

  onSubmit() {
    var notes=this.profileForm.value;
    console.log("Notes...", this.profileForm.value);
    //var formData=new FormData();

   // formData.append("newNotes",this.profileForm.value);
    this.http.post(this.APIUrl,this.profileForm.value).subscribe(data=>{
      console.log("data...",data)
      alert(data);
    })
  }
}
