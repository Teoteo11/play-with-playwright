import { Component, EventEmitter, output, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  tabChanged = output<string>();
  
  activeTab = signal('tasks');

  onTabClick(tab: string): void {
    this.activeTab.set(tab);
    this.tabChanged.emit(tab);
  }

}
