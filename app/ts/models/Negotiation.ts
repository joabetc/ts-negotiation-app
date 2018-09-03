import { Printable } from "./Printable";

export class Negotiation extends Printable {

  constructor(
    readonly date: Date, 
    readonly quantity: number, 
    readonly value: number) {
      super();
    }

  get amount() {
    return this.quantity * this.value;
  }

  toString(): void {
    console.log(
      `Date: ${this.date},
      Quantity: ${this.quantity},
      Value: ${this.value},
      Amount: ${this.amount}`
    )
  }
}