class NegotiationController {
  
  private _inputDate;
  private _inputQuantity;
  private _inputValue;

  constructor() {
    this._inputDate = document.querySelector('#data');
    this._inputQuantity = document.querySelector('#quantidade');
    this._inputValue = document.querySelector('#value');
  }

  add(event) {

    event.preventDefault();
    
    const negotiation = new Negotiation(
      this._inputDate.value, 
      this._inputQuantity.value, 
      this._inputValue.value)
  }
}