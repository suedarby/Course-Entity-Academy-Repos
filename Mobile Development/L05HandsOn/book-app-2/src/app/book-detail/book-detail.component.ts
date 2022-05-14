import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../books/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.css' ]
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getbook();
  }

  getBook(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.book) {
      this.bookService.updateBook(this.book)
        .subscribe(() => this.goBack());
    }
  }
}