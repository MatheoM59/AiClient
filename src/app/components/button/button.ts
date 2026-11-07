import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
  host: {
    class: 'flex',
  },
})
export class Button {
  type = input<'submit' | 'button' | 'reset'>('button');
  variant = input<'primary' | 'secondary'>('primary');
  disabled = input(false);
  text = input.required<string>();
  clicked = output<void>();
}
