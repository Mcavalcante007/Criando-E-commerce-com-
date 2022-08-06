import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros: any;
  bockService: BooksService;

  constructor(bockService: BooksService) {

    this.bockService = bockService;
    }

  ngOnInit(): void {
  
    this.livros = this.bockService.getBooks().subscribe((data =>{
      this.livros = data;
      console.log(this.livros)
    }))
  }

}
