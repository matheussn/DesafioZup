import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'core-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
