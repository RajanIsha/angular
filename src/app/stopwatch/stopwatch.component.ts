import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { timer } from 'rxjs';
import { Subscription, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  private time = 0;
  private startAt = 0;
  private watcher: Subscription = null;
  laps: string[] = [];



  constructor() {
  }

  ngOnInit() {
  }

  start() {
    this.startAt = 0;

    this.watcher = timer(0, 10).subscribe(() => {
      this.time = this.time + 1;
    });
  }

  stop() {
    this.watcher.unsubscribe();
    this.watcher = null;
  }

  formattedTime(): string {
    //return moment(this.time - this.startAt).format('HH : mm : ss');
    return moment().hour(0).minute(0).second(this.time).format('HH : mm : ss');
  }

  reset() {
    this.time = 0;
    this.startAt = 0;
    this.laps = [];
  }

  isWatching(): boolean {
    return this.watcher != null;
  }



}
