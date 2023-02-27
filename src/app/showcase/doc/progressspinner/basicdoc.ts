import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'progress-spinner-basic-demo',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>An infinite spin animation is displayed by default.</p>
        </app-docsectiontext>
        <div class="card">
            <p-progressSpinner></p-progressSpinner>
        </div>
        <app-code [code]="code" selector="progress-spinner-basic-demo"></app-code>
    </div>`
})
export class ProgressSpinnerBasicDemo {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-progressSpinner></p-progressSpinner>`,
        html: `
<div class="card">
    <p-progressSpinner></p-progressSpinner>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'progress-spinner-basic-demo',
    templateUrl: './progresspinnerdemo.html'
})

export class ProgressSpinnerBasicDemo {}`
    };
}
