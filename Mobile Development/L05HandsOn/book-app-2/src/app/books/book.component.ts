import { Component, OnInit } from '@angular/core';

import { book } from './book';
import { bookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class booksComponent implements OnInit {
  books: book[] = [];

  constructor(private bookService: bookService) { }

  ngOnInit(): void {
    this.getbooks();
  }

  getbooks(): void {
    this.bookService.getbooks()
    .subscribe(books => this.books = books);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bookService.addbook({ name } as book)
      .subscribe(book => {
        this.books.push(book);
      });
  }

  delete(book: book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deletebook(book.id).subscribe();
  }

}