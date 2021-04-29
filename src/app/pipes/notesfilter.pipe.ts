import { Pipe, PipeTransform } from '@angular/core';
import { Notes } from '../Models/notes';

@Pipe({
  name: 'notesfilter'
})
export class NotesfilterPipe implements PipeTransform {

  transform(notesList: [],searchNotes: string): any[] {
    if(!notesList)
    {
      return [];
    }
    if(!searchNotes)
    {
      return notesList;
    }
    searchNotes= searchNotes.toLocaleLowerCase();
    return notesList.filter((it:Notes)=>{
      return it.title.toLocaleLowerCase().includes(searchNotes);
    })
  }

}
