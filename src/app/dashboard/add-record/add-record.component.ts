import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Record} from '../../model/record';
import {FormControl, FormGroup} from '@angular/forms';
import {SharingService} from '../../service/sharing.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  recordForm = new FormGroup({
    date: new FormControl(''),
    distance: new FormControl(''),
    time: new FormControl('')
  });

  constructor(private sharingService: SharingService) { }

  ngOnInit(): void {
  }

  addRecord(): void {
    console.log(this.recordForm.value);
    this.sharingService.changeData(this.recordForm.value);
  }
}
