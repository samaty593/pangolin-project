import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(
    private router: Router) {}
  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);

  }

}
