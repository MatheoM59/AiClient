import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LucideArrowUp } from '@lucide/angular';
@Component({
  imports: [ReactiveFormsModule, LucideArrowUp],
  selector: 'app-message-form',
  styleUrl: './message-form.css',
  templateUrl: './message-form.html',
})
export class MessageForm {
  disabled = input(false);
  messageSent = output<string>();

  setDisabled() {
    return this.messageForm.invalid || this.disabled();
  }

  send() {
    if (this.messageForm.valid) {
      const text = this.messageForm.controls.message.value;
      const cleanText = text.trim();
      if (cleanText !== '') {
        this.messageSent.emit(cleanText);
        this.messageForm.reset();
      }
    }
  }
  protected messageForm = new FormGroup({
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
}
