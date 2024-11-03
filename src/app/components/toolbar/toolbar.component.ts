import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports:[IonicModule],
  standalone: true

})
export class ToolbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log()
  }

}
