class NegotiationController {
  
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();

  constructor() {
    this._inputDate = <HTMLInputElement> document.querySelector('#data');
    this._inputQuantity = <HTMLInputElement> document.querySelector('#quantidade');
    this._inputValue = <HTMLInputElement> document.querySelector('#value');
  }

  add(event: Event) {

    event.preventDefault();
    
    const negotiation = new Negotiation(
      new Date(this._inputDate.value.replace(/-/g, ',')), 
      parseInt(this._inputQuantity.value), 
      parseFloat(this._inputValue.value))
  }
}