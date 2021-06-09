import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }
  

  @Input('appHighlight') highlightColor: string;

  private highLight(color : any){
    this.element.nativeElement.style.backgroundColor = color ;
  }
  @HostListener('mouseenter') onmouseenter(){
    this.highLight(this.highlightColor)
  }
  @HostListener('mouseleave') onmouseleave(){
    this.highLight(null);
  }

}
