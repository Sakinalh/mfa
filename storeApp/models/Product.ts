export interface Book {
    isbn: string;
    price: number;
    cover: string;
    synopsis: string[];
    title: string;
    qty?: number;
}