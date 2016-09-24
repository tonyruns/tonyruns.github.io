import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project.card.html'
})

export class ProjectCardComponent{
  @Input()
  project: JSON;
}
