import { Negotiation, PartialNegotiation } from '../models/index';

export class NegotiationService {
  
  getNegotiations(handler: HandlerFunction): Promise<Negotiation[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => handler(res))
      .then(res => res.json())
      .then((data: PartialNegotiation[]) =>
        data
          .map(dat => new Negotiation(new Date(), dat.vezes, dat.montante))
        )
      .catch(err => {
        console.log(err);
        throw new Error('It was not possible to import the negotiations');
      });
  }
}

export interface HandlerFunction  {
  (res: Response): Response
}