import { useState } from "react";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [years, setYears] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculatePayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = years * 12;
    const payment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numPayments));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h2>Mortgage Calculator</h2>
      <div className="form-group">
        <label>Loan Amount:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Loan Term (Years):</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button onClick={calculatePayment}>Calculate</button>
      <h3>Monthly Payment: ${monthlyPayment}</h3>
    </div>
  );
}

export default MortgageCalculator;
