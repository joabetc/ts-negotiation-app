import { Negotiation } from "../models/index";

export function print(...negotiations: Negotiation[]) {

  negotiations.forEach(negotiation => negotiation.toString());
}