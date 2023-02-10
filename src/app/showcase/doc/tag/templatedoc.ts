import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'template-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Children of the component are passed as the content for templating.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-tag [style]="{ background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)' }">
                <div class="flex align-items-center gap-2">
                    <img alt="Country" src="assets/showcase/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: '18px'" />
                    <span class="text-base">Italia</span>
                    <i class="pi pi-times text-xs"></i>
                </div>
            </p-tag>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class TemplateDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-tag [style]="{ 'background': 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}">
    <div class="flex align-items-center gap-2">
        <img alt="Country" src="assets/showcase/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: '18px'" />
        <span class="text-base">Italia</span>
        <i class="pi pi-times text-xs"></i>
    </div>
</p-tag>`,
        html: `
<div class="card flex justify-content-center">
    <p-tag [style]="{ 'background': 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}">
        <div class="flex align-items-center gap-2">
            <img alt="Country" src="assets/showcase/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: '18px'" />
            <span class="text-base">Italia</span>
            <i class="pi pi-times text-xs"></i>
        </div>
    </p-tag>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './tagdemo.html'
})
export class TagDemo {}`
    };
}
