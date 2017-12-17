import { Directive, Renderer2, OnInit , ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'blue';


  // pass property of host element you'd like to bind, then gets stored in variable
  // makes renderer functionality useless in this example
  @HostBinding('style.backgroundColor') backgroundColor;

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  // event to listen to
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor =  this.defaultColor;
  }

}
