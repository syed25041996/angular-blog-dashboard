import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environment/environment';

const supabaseUrl = environment.apiUrl;
const supabaseKey = environment.apiKey;
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categoryForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      category: '',
    });

  
  }

  async saveCategory() {
    const { data, error } = await supabase
      .from('blog')
      .insert([{ categories: this.categoryForm.value.category }]);
  }
}
