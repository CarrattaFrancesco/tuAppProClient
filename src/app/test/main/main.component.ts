import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {Storage} from 'aws-amplify';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  myVar = "";

  constructor(private data: ServiceService) {
  }
  ngOnInit() {

  }


  testPromise(){
    this.data.promise().then((r) => {
      console.log(r);
    });

  }


  testObservable(){
    this.data.changeVar.subscribe(val => {
      console.log(val);
      if (val === 2) {
        this.doSomething();
      }
    });
  }

  private doSomething() {
    console.log("changed");
  }

  handleFileInput(files: any) {
    Storage.configure({
      AWSS3: {
        bucket: 'storagebuckets3120133-frontend',
        region: 'eu-central-1'
      }
    })

    const _storageOptions = {
      contentType : ''
    }
    const file = files.item(0);

    if (!file) {
      return;
    }
    if (!_storageOptions.contentType) {
      _storageOptions.contentType = file.type;
    }


    Storage.put(file.name, file, _storageOptions).then((key) => {
      console.log(key)

    })




  }




}
