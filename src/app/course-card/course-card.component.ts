import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  standalone: true,
})
export class CourseCardComponent {
  @Input() thumbnail = '';
  @Input() progress = 0;
  @Input() title = '';
  @Input() provider = '';
  @Input() providerLogo = '';
  @Input() rating = 0;
  @Input() reviews = 0;
  @Input() enrolled = 0;
  @Input() level = '';
  @Input() duration = '';
}
