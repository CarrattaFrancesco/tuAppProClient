import { Injectable } from '@angular/core';
import Storage from '@aws-amplify/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // tslint:disable-next-line:variable-name
  _storageOptions: any = {};
  photoUrl: string;
  uploading = false;
  s3ImageFile: any = null;
  s3ImagePath = '';

  constructor() { }

  setItem(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key){
    return JSON.parse(localStorage.getItem(key));
  }

  clear(){
    localStorage.clear();
  }



  uploadphotoserver(file){
    if (!file) {
      return;
    }

    if (!this._storageOptions.contentType) {
      this._storageOptions.contentType = file.type;
    }

    this.s3ImagePath = `${this.s3ImagePath}/${file.name}`;
    this.s3ImageFile = file;
    console.log('this.s3ImagePath:', this.s3ImagePath, 's3ImageFile:', this.s3ImageFile);

    Storage
      .put(this.s3ImagePath, this.s3ImageFile, this._storageOptions)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        // alert error
        console.log(error);
      });


    this.s3ImagePath = '';
    this.s3ImageFile = null;
  }


}
