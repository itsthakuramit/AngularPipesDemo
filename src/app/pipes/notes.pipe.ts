import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notes'
})
export class NotesPipe implements PipeTransform {

  transform(status: any): string {
    if(status==0){
      return "Not Started"
    }
    else if (status==1)
    {
      return "Started"
    }
    else
    {
      return "Completed"
    }
  }

}
