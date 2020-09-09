import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64image'
})
export class Base64imagePipe implements PipeTransform {

  transform(file, ...args: unknown[]): any {
    const reader = new FileReader();

    // tslint:disable-next-line:only-arrow-functions
    reader.addEventListener("load", function() {
      // convert image file to base64 string
      if (typeof reader.result === 'string') {
        return reader.result;
      }
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

}
