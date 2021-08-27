import { Directive, HostBinding, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective{
  @Input('appDropdown') trasnlateX: string = '0px';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  defaultState: string = '';
  activeState: string = 'show';

  // @HostBinding('classList') classList: string[];
  
  @HostListener('click') onClick(eventData: Event) {
    if (!this.elRef.nativeElement.classList.contains('show')){
      this.renderer.addClass(this.elRef.nativeElement, 'show');
      this.renderer.addClass(this.elRef.nativeElement.nextSibling, 'show');

      this.renderer.setStyle(this.elRef.nativeElement.nextSibling, 'position', 'absolute');
      this.renderer.setStyle(this.elRef.nativeElement.nextSibling, 'inset', '0px auto auto 0px');
      this.renderer.setStyle(this.elRef.nativeElement.nextSibling, 'margin', '0px');
      this.renderer.setStyle(this.elRef.nativeElement.nextSibling, 'transform', 'translate(' + this.trasnlateX+',40px)');
    }else{
      this.renderer.removeClass(this.elRef.nativeElement, 'show');
      this.renderer.removeClass(this.elRef.nativeElement.nextSibling, 'show');
    }
   
   
  }
}