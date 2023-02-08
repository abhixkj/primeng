import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { PhotoService } from '../../service/photo.service';

@Component({
    selector: 'autoplay-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A slideshow implementation is defined by adding <i>circular</i> and <i>autoPlay</i> properties.</p>
        </app-docsectiontext>
        <div class="card">
            <p-galleria [(value)]="images" [autoPlay]="true" [circular]="true" [responsiveOptions]="responsiveOptions" [numVisible]="5"  [containerStyle]="{'width': '100%'}"> 
                <ng-template pTemplate="item" let-item>
                    <img [src]="item.previewImageSrc" style="width: 100%;" />
                </ng-template>
                <ng-template pTemplate="thumbnail" let-item>
                    <div class="grid grid-nogutter justify-content-center">
                        <img [src]="item.thumbnailImageSrc" />
                    </div>
                </ng-template>
            </p-galleria>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [PhotoService]
})
export class AutoplayDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    images: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }

    code: Code = {
        html: `
<div class="card">
    <p-galleria [(value)]="images" [autoPlay]="true" [circular]="true" [responsiveOptions]="responsiveOptions" [numVisible]="5"  [containerStyle]="{'width': '100%'}"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.previewImageSrc" style="width: 100%;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photo.service';

@Component({
    templateUrl: './galleriademo.html',
    styleUrls: ['./galleriademo.scss'],
    providers: [PhotoService]
})

export class GalleriaDemo implements OnInit {
    images: any[];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primereact.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`
    };
}
