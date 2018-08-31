import { Negotiation, PartialNegotiation } from '../models/index';

export class NegotiationService {
  
  getNegotiations(handler: Function): Promise<Negotiation[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => handler(res))
      .then(res => res.json())
      .then((data: PartialNegotiation[]) =>
        data
          .map(dat => new Negotiation(new Date(), dat.vezes, dat.montante))
        )
      .catch(err => console.log(err));
  }
}