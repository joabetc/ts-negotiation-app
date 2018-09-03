import { NegotiationsView, MessageView } from '../views/index';
import { Negotiations, Negotiation } from '../models/index';
import { DOMInject, LogClassInstance, Throttle } from '../helpers/decorators/index';
import { NegotiationService } from '../services/index';
import { print } from '../helpers/index';

@LogClassInstance()
export class NegotiationController {
  
  @DOMInject('#date')
  private _inputDate: JQuery;

  @DOMInject('#quantity')
  private _inputQuantity: JQuery;

  @DOMInject('#value')
  private _inputValue: JQuery;

  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView('#negotiationsView');
  private _messageView = new MessageView('#messageView');

  private _service = new NegotiationService();

  constructor() {
    this._negotiationsView.update(this._negotiations);
  }

  @Throttle()
  add() {

    let date = new Date(this._inputDate.val().replace(/-/g, ','));

    if (!this._isWorkDay(date)) {
      this._messageView.update("Thia is not a valid work day!");
      return;
    }
    
    const negotiation = new Negotiation(
      date, 
      parseInt(this._inputQuantity.val()), 
      parseFloat(this._inputValue.val())
    );

    print(negotiation);

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);

    this._messageView.update('Negotiations added successfully!');
  }

  private _isWorkDay(date: Date) {
    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
  }

  @Throttle()
  importData() {
    
    this._service
    .getNegotiations(res => {
        if (res.ok) {
          return res;
        } else {
          throw new Error(res.statusText);
        }
      })
      .then(negotiations => 
        negotiations.forEach(negotiation => 
          this._negotiations.add(negotiation)));;
  }
}

enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}