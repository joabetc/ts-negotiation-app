class NegotiationsView extends View<Negotiations> {

  template(model: Negotiations): string {
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
          ${model.toArray().map(negotiation => 
            `
              <tr>
                <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                <td>${negotiation.quantity}</td>
                <td>${negotiation.value}</td>
                <td>${negotiation.amount}</td>
              </tr>
            `
          ).join('')}
        </tbody>
        
        <tfoot>
        </tfoot>
      </table>`;
  }
}