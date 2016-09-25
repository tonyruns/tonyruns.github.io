import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project.card.html',
  styleUrls: ['./project.card.css']
})

export class ProjectCardComponent{
  @Input()
  project: JSON;
}
