import { NgModule } from '@angular/core';

import { QuillEditorComponent } from './quill-editor.component';
import { DebounceDirective } from './debounce.directive';

@NgModule({
  declarations: [
    QuillEditorComponent,
    DebounceDirective
],
  imports: [],
  exports: [QuillEditorComponent],
  providers: []
})
export class QuillModule { }
