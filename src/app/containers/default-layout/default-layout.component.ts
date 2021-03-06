import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import {Config} from '../../models/Config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  name: string = ''
  amount: any;

  constructor(private router: Router) {
    this.name = Config.getName();
    this.amount = Config.getAccountBalance();
  }


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    Config.clear();
    this.router.navigateByUrl("/login")
  }
}
