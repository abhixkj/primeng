import { Component, Input } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { Code } from '../../domain/code';
import { CountryService } from '../../service/country.service';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                AutoComplete uses ngModel for two-way binding, requires a list of suggestions and a completeMethod to query for the results. The completeMethod gets the query text as event.query property and should update the suggestions with the
                search results.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-autoComplete [(ngModel)]="selectedCountry" [showEmptyMessage]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name" [minLength]="1"></p-autoComplete>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    countries: any[];

    items: any[];

    selectedCountry: any;

    filteredCountries: any[];

    groupedCities: SelectItemGroup[];

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });

        this.groupedCities = [
            {
                label: 'Germany',
                value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA',
                value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan',
                value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];

        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }

    filterCountry(event) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.countries.length; i++) {
            let country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

    code: Code = {
        basic: `
<p-autoComplete [(ngModel)]="selectedCountry" [showEmptyMessage]="true" [suggestions]="filteredCountries"
    (completeMethod)="filterCountry($event)" field="name" [minLength]="1"></p-autoComplete>`,

        html: `
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedCountry" [showEmptyMessage]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name" [minLength]="1"></p-autoComplete>
</div>`,

        typescript: `
import { SelectItemGroup } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
    templateUrl: './autocompletedemo.html'
})
export class AutoCompleteDemo {
    countries: any[];

    items: any[];

    selectedCountry: any;

    filteredCountries: any[];

    groupedCities: SelectItemGroup[];

    constructor(private countryService: CountryService, private filterService: FilterService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });

        this.groupedCities = [
            {
                label: 'Germany',
                value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA',
                value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan',
                value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];

        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }

    filterCountry(event) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.countries.length; i++) {
            let country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}

@Injectable()
export class CountryService {

    constructor(private http: Http) {}

    getCountries() {
        return this.http.get('showcase/resources/data/countries.json')
                    .toPromise()
                    .then(res => <any[]> res.json().data)
                    .then(data => { return data; });
    }
}`
    };
}
