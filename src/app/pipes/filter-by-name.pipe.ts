import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[], filterValue: string) {
    if (!products) return [];
    if (!filterValue) return products;

    return products.filter(item => item.title.toLowerCase().includes(filterValue.toLowerCase()));
  }

}
