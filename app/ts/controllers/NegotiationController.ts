import { NegotiationsView, MessageView } from '../views/index';
import { Negotiations, Negotiation } from '../models/index';

export class NegotiationController {
  
  private _inputDate: JQuery;
  private _inputQuantity: JQuery;
  private _inputValue: JQuery;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView('#negotiationsView');
  private _messageView = new MessageView('#messageView');

  constructor() {
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');
    this._negotiationsView.update(this._negotiations);
  }

  add(event: Event) {

    event.preventDefault();

    let date = new Date(this._inputDate.val().replace(/-/g, ','));

    if (date.getDay() == 0 || date.getDay() == 6) {
      this._messageView.update("Thia is not a valid work day!");
      return;
    }
    
    const negotiation = new Negotiation(
      date, 
      parseInt(this._inputQuantity.val()), 
      parseFloat(this._inputValue.val())
    );

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);

    this._messageView.update('Negotiations added successfully!');
  }
}
