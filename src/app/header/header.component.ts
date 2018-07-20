import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  i = 0;
  txt = 'Burgers!!'; /* The text */
  speed = 50; /* The speed/duration of the effect in milliseconds */

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      if (this.i < this.txt.length) {
        document.getElementById("demo").innerHTML += this.txt.charAt(this.i);
        this.i++;
      }
    }, this.speed)

  }

}
