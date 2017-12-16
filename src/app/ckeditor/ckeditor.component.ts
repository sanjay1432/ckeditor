import { Component, OnInit } from '@angular/core';

import { CkeditorService } from './ckeditor.service';
@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
  doc: any;
  ckeditorContent: string;

  constructor(private _ckService: CkeditorService){
    this.ckeditorContent = `<p>My HTML</p>`;
  }

  ngOnInit() {
    this._ckService.getDoc()
    .subscribe(res => this.doc = res);
  }

  onChange(event):void{
    this._ckService.addDoc(event)
    .subscribe(doc => {
      //console.log(doc)
    },
    err=>{
              //console.log(err)
            })
  }
}
