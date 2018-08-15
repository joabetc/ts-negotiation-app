class NegotiationController {
  
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView('#negotiationsView');
  private _messageView = new MessageView('#messageView');

  constructor() {
    this._inputDate = <HTMLInputElement> document.querySelector('#date');
    this._inputQuantity = <HTMLInputElement> document.querySelector('#quantity');
    this._inputValue = <HTMLInputElement> document.querySelector('#value');
    this._negotiationsView.update(this._negotiations);
  }

  add(event: Event) {

    event.preventDefault();
    
    const negotiation = new Negotiation(
      new Date(this._inputDate.value.replace(/-/g, ',')), 
      parseInt(this._inputQuantity.value), 
      parseFloat(this._inputValue.value)
    );

    this._negotiations.add(negotiation);

    this._negotiationsView.update(this._negotiations);

    this._messageView.update('Negotiations added successfully!');
  }
}