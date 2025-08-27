import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class HeaderComponent {
  searchText = '';
  suggestions = ['Google Data Analytics', 'Big Data', 'Cloud Computing', 'AI Fundamentals'];
  filteredSuggestions: string[] = [];
  showDropdown = false;

  onSearchChange(value: string) {
    this.filteredSuggestions = this.suggestions.filter((s) =>
      s.toLowerCase().includes(value.toLowerCase())
    );
    this.showDropdown = !!value && this.filteredSuggestions.length > 0;
  }

  clearSearch() {
    this.searchText = '';
    this.filteredSuggestions = [];
    this.showDropdown = false;
  }

  selectSuggestion(s: string) {
    this.searchText = s;
    this.showDropdown = false;
  }

  // Profile dropdown logic
  showProfileDropdown = false;
  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }
  closeProfileDropdown() {
    this.showProfileDropdown = false;
  }
}
