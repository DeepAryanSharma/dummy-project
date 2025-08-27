import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [HeaderComponent, CourseCardComponent],
})
export class DashboardComponent {
  stats = [
    { title: 'My Goals', value: 3, action: 'View All' },
    { title: 'Enrolled Courses', value: 8, action: 'View All' },
    { title: 'Certificates Earned', value: 2, action: 'Download' },
  ];

  lastViewedCourses = [
    {
      thumbnail: 'https://img-c.udemycdn.com/course/240x135/123456.jpg',
      progress: 31,
      title: 'Google Data Analytics',
      provider: 'LinkedIn Learning',
      providerLogo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      rating: 4.3,
      reviews: 133000,
      enrolled: 635,
      level: 'Beginner',
      duration: '6 months',
    },
    {
      thumbnail: 'https://img-c.udemycdn.com/course/240x135/654321.jpg',
      progress: 10,
      title: 'Big Data Analytics',
      provider: 'LinkedIn Learning',
      providerLogo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      rating: 4.3,
      reviews: 133000,
      enrolled: 635,
      level: 'Beginner',
      duration: '6 months',
    },
    {
      thumbnail: 'https://img-c.udemycdn.com/course/240x135/789012.jpg',
      progress: 80,
      title: 'Google Data Analytics',
      provider: 'LinkedIn Learning',
      providerLogo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      rating: 4.3,
      reviews: 133000,
      enrolled: 635,
      level: 'Beginner',
      duration: '6 months',
    },
    {
      thumbnail: 'https://img-c.udemycdn.com/course/240x135/789012.jpg',
      progress: 80,
      title: 'Google Data Analytics',
      provider: 'LinkedIn Learning',
      providerLogo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      rating: 4.3,
      reviews: 133000,
      enrolled: 635,
      level: 'Beginner',
      duration: '6 months',
    },
    {
      thumbnail: 'https://img-c.udemycdn.com/course/240x135/789012.jpg',
      progress: 80,
      title: 'Google Data Analytics',
      provider: 'LinkedIn Learning',
      providerLogo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      rating: 4.3,
      reviews: 133000,
      enrolled: 635,
      level: 'Beginner',
      duration: '6 months',
    },
  ];

  newlyLaunchedCourses = [
    {
      thumbnail: 'https://img-c.udemycdn.com/course/240x135/123456.jpg',
      progress: 0,
      title: 'AI Fundamentals',
      provider: 'LinkedIn Learning',
      providerLogo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      rating: 4.5,
      reviews: 120000,
      enrolled: 500,
      level: 'Intermediate',
      duration: '4 months',
    },
  ];
}
