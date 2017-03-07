import {Input, Output} from '@angular/core/src/metadata/directives';
import {EventEmitter, ElementRef, OnInit, Directive} from '@angular/core';
import {Observable} from 'rxjs';
import {NgModel} from '@angular/forms';

/**
 * Debounce directive provides delay on executing the keyup event of an element.
 */

@Directive({ selector: '[debounce]' })
export class DebounceDirective implements OnInit {
    @Input() delay: number =300; // delay in milliseconds
    @Output() onTextChanged: EventEmitter<any> = new EventEmitter();

    constructor(private elementRef: ElementRef, private model: NgModel) {
    }

    ngOnInit(): void {
        const eventStream = Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
            .map(() => this.model.value)
            .debounceTime(this.delay);

        eventStream.subscribe(input => this.onTextChanged.emit(input));
    }

}