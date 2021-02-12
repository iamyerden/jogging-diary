import {Component, Input, OnInit} from '@angular/core';
import {SharingService} from '../../service/sharing.service';
import {Record} from '../../model/record';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  record: any;
  records = [
    {
      date: '2018-04-11',
      distance: '5,000.00',
      time: '42:40',
      avgSpeed: '7.20'
    },
    {
      date: '2018-04-11',
      distance: '5,000.00',
      time: '42:40',
      avgSpeed: '7.20'
    },
    {
      date: '2018-04-11',
      distance: '5,000.00',
      time: '42:40',
      avgSpeed: '7.20'
    },
    {
      date: '2018-04-11',
      distance: '5,000.00',
      time: '42:40',
      avgSpeed: '7.20'
    },
    {
      date: '2018-04-11',
      distance: '5,000.00',
      time: '42:40',
      avgSpeed: '7.20'
    }
  ];

  constructor(private sharingService: SharingService) { }

  ngOnInit(): void {
    this.sharingService.data$.subscribe(res => {
      this.record = res;
      console.log('results', typeof(this.record));
      if (this.record !== '') {
        this.record.avgSpeed = this.record.distance / this.record.time;
        this.records.push(this.record);
      }
    });
  }
}
