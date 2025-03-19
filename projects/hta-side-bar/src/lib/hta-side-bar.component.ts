import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-hta-sideBar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hta-side-bar.component.html',
  styleUrl: './hta-side-bar.component.css',
})
export class HtaSideBarComponent implements OnInit {
  tabs = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Settings', icon: 'settings' },
    { name: 'Profile', icon: 'person' },
  ];

  addTab(tabName: string, icon: string) {
    this.tabs.push({ name: tabName, icon: icon });
  }

  constructor() {}

  ngOnInit(): void {}
}
