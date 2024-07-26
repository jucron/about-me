import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  profileImg = 'assets/path.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
