import {Directive, ElementRef, OnInit} from '@angular/core';


@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // adding private makes member of class
    constructor(private elementRef: ElementRef) {
        // this.elementRef = elementRef;
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
