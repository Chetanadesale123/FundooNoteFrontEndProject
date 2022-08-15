import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() NoteArray: any;

  constructor() { }

  ngOnInit(): void {
    console.log('Allnotes',this.NoteArray);
  }

}
