import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  navItems = [
    {
      title: 'Dashboard',
      link: 'dashboard',
    },
    {
      title: 'Transport Operators',
      link: 'transport-operator',
    },
    {
      title: 'Action Center',
      link: 'action-center',
    },
    {
      title: 'PAO',
      link: 'pao',
    },
    {
      title: 'Driver',
      link: 'driver',
    },
    {
      title: 'Blacklist',
      link: 'blacklist',
    },
    {
      title: 'My Profile',
      link: 'profile',
    },
  ];
}
