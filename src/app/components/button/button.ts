import { Component, computed, input, output } from '@angular/core';

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
  shape = input<'default' | 'round'>('default');
  disabled = input(false);
  text = input.required<string>();
  // Accessible name, for buttons whose text alone is not explicit (e.g. an initial)
  ariaLabel = input<string>();
  clicked = output<void>();

  protected readonly classes = computed(() => {
    const color =
      this.variant() === 'primary'
        ? 'bg-primary text-on-primary enabled:hover:bg-primary-hover'
        : 'border border-border-strong bg-surface text-foreground enabled:hover:bg-surface-muted';
    const shape =
      this.shape() === 'round'
        ? 'size-9 rounded-full font-semibold'
        : 'w-full rounded-control px-4 py-2';
    return `${color} ${shape}`;
  });
}
