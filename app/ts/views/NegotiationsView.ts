class NegotiationsView {

  private _element:  Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  update(): void {
    this._element.innerHTML = this.template();
  }

  template(): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATE</th>
            <th>QUANTITY</th>
            <th>VALUE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        
        <tbody>
        </tbody>
        
        <tfoot>
        </tfoot>
      </table>`;
  }
}