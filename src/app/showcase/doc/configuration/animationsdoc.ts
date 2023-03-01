import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'animations-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Various components utilize Angular animations to improve the user experience, starting with Angular 4 animations have their own module so you need to import <i>BrowserAnimationsModule</i> to your application. If you prefer to disable
                animations globally, import <i>NoopAnimationsModule</i> instead.
            </p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    </div>`
})
export class AnimationsDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        //...
    ],
    //...
})
export class AppModule { }`
    };
}
