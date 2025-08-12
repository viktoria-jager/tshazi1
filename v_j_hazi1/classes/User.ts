import { Library } from "./Library";
import { Book } from "./Book";

export class User {
  constructor(
    public userId: string,
    public name: string,
    public email: string
  ) {}

  borrowBook(library: Library, bookId: string): Book | undefined {
    const book = library.findBookById(bookId);
    if (book) {
      library.removeBook(bookId);
      console.log(`${this.name} kölcsönözte: ${book.title}`);
      return book;
    } else {
      console.log(`A könyv nem található: ID=${bookId}`);
      return undefined;
    }
  }
}
