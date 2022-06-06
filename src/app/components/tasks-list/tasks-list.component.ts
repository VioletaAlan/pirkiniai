import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public products:Product[]=[];

  constructor() {
    this.products.push(new Product("Išnešti šiukšles", "rutininis"));
    this.products.push(new Product("Išvalyti kambarį", "skubus"));
    this.products.push(new Product("Išsiurbti kilimus", "ypač skubus"));
   }

  ngOnInit(): void {
  }

}