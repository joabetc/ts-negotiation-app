class NegotiationController {
  
  private _inputDate: Element;
  private _inputQuantity: Element;
  private _inputValue: Element;

  constructor() {
    this._inputDate = document.querySelector('#data');
    this._inputQuantity = document.querySelector('#quantidade');
    this._inputValue = document.querySelector('#value');
  }

  add(event: Event) {

    event.preventDefault();
    
    const negotiation = new Negotiation(
      this._inputDate.value, 
      this._inputQuantity.value, 
      this._inputValue.value)
  }
}