import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[lowercase]',
})
export class LowerCaseDirectiveDirective {

  lastValue: string;

  constructor(public ref: ElementRef) { }

  @HostListener('input', ['$event']) onInput($event)
  {
    let start = $event.target.selectionStart;
    let end = $event.target.selectionEnd;
    $event.target.value = $event.target.value.toLowerCase();
    $event.target.setSelectionRange(start, end);
    $event.preventDefault();

    if (!this.lastValue || (this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value)) {
      this.lastValue = this.ref.nativeElement.value = $event.target.value;
      // Propagation
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('input', false, true);
      event.target.dispatchEvent(evt);
    }
  }
}
