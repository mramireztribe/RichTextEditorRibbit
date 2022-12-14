import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';

import jsonDoc from './doc';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RichTextComponent implements OnInit, OnDestroy {
  editordoc = jsonDoc;

  editor: Editor = new Editor;
  toolbar: Toolbar = [
    [
      'bold',
      'italic',
      'align_left',
      'align_center',
      'align_right',
      'align_justify',
      'link',
      'image',
      'underline',
      'text_color',
      'background_color',
      'strike',
      'code',
      'blockquote',
      'ordered_list',
      'bullet_list',
      { heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }
    ],
  ];
  constructor() { }

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  // get doc(): AbstractControl {
  //   return this.form.get('editorContent');
  // }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }


}
