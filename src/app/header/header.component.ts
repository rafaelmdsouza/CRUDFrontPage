import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

  export class HeaderComponent {
    constructor() {}
    @Input() icon!: string;
    @Input() headerTitle!: string;
  }



