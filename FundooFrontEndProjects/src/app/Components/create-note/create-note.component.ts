import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservices/note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  //@Output() messageEvent = new EventEmitter<any>();
  show = false
  noteForm!: FormGroup;
  //submitted = false;
  //token: any;
  //@Output() createToGetAllNotes = new EventEmitter<string>()

  constructor(private note: NoteService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onOpen() {
    this.show = true;
  }
  onSubmit() {
    this.show = false;
    // stop here if form is invalid
    if (this.noteForm.valid) {
      let reqdata = {
        title: this.noteForm.value.title,
        description: this.noteForm.value.description,
        reminder: "2022-08-13T01:01:52.814Z",
        colour: "string",
        image: "string",
        isArchived: true,
        isPinned: true,
        isDeleted: true,
        createdAt: "2022-08-13T01:01:52.814Z",
        editedAt: "2022-08-13T01:01:52.814Z"
      };
      this.note.createnote(reqdata,).subscribe((response: any) => {
        console.log("note create successful", response);
        localStorage.setItem("token", response.response)
      },
        (error: any) => {
          console.log(error);
        })
    } else {
      return;
    }
  }
}
