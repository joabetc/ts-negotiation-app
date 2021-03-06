import { Common } from "./Common";

export class Negotiation implements Common<Negotiation> {

  constructor(
    readonly date: Date, 
    readonly quantity: number, 
    readonly value: number) { }

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

  equals(negotiation: Negotiation): boolean {
    return this.date.getDate() == negotiation.date.getDate()
      && this.date.getMonth() == negotiation.date.getMonth()
      && this.date.getFullYear() == negotiation.date.getFullYear();
  }
}