export class Product {
  public readonly id: string;
  public readonly created: number;

  public constructor(id: string, created: number) {
    this.id = id;
    this.created = created;
  }
}
