import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Label of the tag is defined with the <i>value</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-tag value="New"></p-tag>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic:`
<p-tag value="New"></p-tag>`,
        html: `
<div class="card flex justify-content-center">
    <p-tag value="New"></p-tag>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './tagdemo.html'
})
export class TagDemo {}`
    };
}
