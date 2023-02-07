import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'severity-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Severity defines the color of the tag, possible values are <i>success</i>, <i>info</i>, <i>warning</i> and <i>danger</i> in addition to the default theme color.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-tag value="Primary"></p-tag>
            <p-tag severity="success" value="Success"></p-tag>
            <p-tag severity="info" value="Info"></p-tag>
            <p-tag severity="warning" value="Warning"></p-tag>
            <p-tag severity="danger" value="Danger"></p-tag>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class SeverityDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex justify-content-center gap-2">
    <p-tag value="Primary"></p-tag>
    <p-tag severity="success" value="Success"></p-tag>
    <p-tag severity="info" value="Info"></p-tag>
    <p-tag severity="warning" value="Warning"></p-tag>
    <p-tag severity="danger" value="Danger"></p-tag>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './tagdemo.html'
})
export class TagDemo {}`
    };
}
