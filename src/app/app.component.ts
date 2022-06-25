import { UserService } from './api/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cargodrom-frontend';

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {

  }
}
