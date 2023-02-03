import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'code-highlighter',
    templateUrl: './app.codehighlighter.component.html'
})
export class CodeHighlighterComponent implements AfterViewInit {
    constructor() {}

    @ViewChild('codeElement') codeElement: ElementRef;

    @Input() lang: string;

    @Input() code: string;

    languageClassName: string = '';

    ngAfterViewInit() {
        if (window['Prism']) {
            window['Prism'].highlightElement(this.codeElement.nativeElement);
        }
    }

    ngOnInit() {
        this.languageClassName = 'pt-5 language-' + this.lang;
    }
}
