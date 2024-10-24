import React, { useState } from "react";
import Chart from "chart.js/auto"; // Assuming you are using Chart.js
import { Line } from "react-chartjs-2";
import "./Rates.css";

const Rates = () => {
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [term, setTerm] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [chartData, setChartData] = useState({}); // For mortgage rate trends
  const [isRateAlertEnabled, setIsRateAlertEnabled] = useState(false);

  const calculatePayment = () => {
    const principal = parseFloat(amount) - parseFloat(downPayment);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = term * 12;

    // Calculate monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (!isNaN(monthly) && monthly !== Infinity && monthly > 0) {
      setMonthlyPayment(monthly.toFixed(2));
      generateAmortizationSchedule(
        principal,
        calculatedInterest,
        calculatedPayments,
        monthly
      );
    } else {
      setMonthlyPayment(null);
      setAmortizationSchedule([]);
    }
  };

  const generateAmortizationSchedule = (
    principal,
    calculatedInterest,
    calculatedPayments,
    monthly
  ) => {
    let schedule = [];
    for (let i = 0; i < calculatedPayments; i++) {
      const interest = principal * calculatedInterest;
      const principalPayment = monthly - interest;
      principal -= principalPayment;
      schedule.push({
        month: i + 1,
        principal: principalPayment.toFixed(2),
        interest: interest.toFixed(2),
        total: monthly.toFixed(2),
      });
    }
    setAmortizationSchedule(schedule);
    setShowSchedule(true);
  };

  const fetchChartData = () => {
    // Dummy data for illustration; replace with actual API call
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Mortgage Rates",
          data: [3.5, 3.6, 3.4, 3.7, 3.8, 3.9],
          borderColor: "#0071e3",
          backgroundColor: "rgba(0, 113, 227, 0.2)",
        },
      ],
    };
    setChartData(data);
  };

  const toggleRateAlerts = () => {
    setIsRateAlertEnabled(!isRateAlertEnabled);
  };

  return (
    <div className="rates-container">
      <h1>Mortgage Rates</h1>
      <div className="rate-table">
        <h2>Current Rates</h2>
        <table>
          <thead>
            <tr>
              <th>Loan Type</th>
              <th>Interest Rate</th>
              <th>APR</th>
              <th>Monthly Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>30-Year Fixed</td>
              <td>3.75%</td>
              <td>3.85%</td>
              <td>$1,200</td>
            </tr>
            <tr>
              <td>15-Year Fixed</td>
              <td>3.25%</td>
              <td>3.35%</td>
              <td>$1,500</td>
            </tr>
            <tr>
              <td>5/1 ARM</td>
              <td>2.85%</td>
              <td>3.00%</td>
              <td>$1,100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Calculate Your Monthly Payment</h2>
      <div className="calculator">
        <input
          type="number"
          placeholder="Loan Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Down Payment ($)"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <select value={term} onChange={(e) => setTerm(e.target.value)}>
          <option value={15}>15 Years</option>
          <option value={30}>30 Years</option>
        </select>
        <button onClick={calculatePayment}>Calculate</button>
        {monthlyPayment && (
          <div className="payment-result">
            <h3>Your Monthly Payment: ${monthlyPayment}</h3>
          </div>
        )}
      </div>

      {showSchedule && (
        <div className="amortization-schedule">
          <h2>Amortization Schedule</h2>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Total Payment</th>
              </tr>
            </thead>
            <tbody>
              {amortizationSchedule.map((payment) => (
                <tr key={payment.month}>
                  <td>{payment.month}</td>
                  <td>{payment.principal}</td>
                  <td>{payment.interest}</td>
                  <td>{payment.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="rate-alerts">
        <h2>Rate Alerts</h2>
        <label>
          <input
            type="checkbox"
            checked={isRateAlertEnabled}
            onChange={toggleRateAlerts}
          />
          Enable rate alerts
        </label>
      </div>

      <div className="trend-chart">
        <h2>Mortgage Rate Trends</h2>
        <button onClick={fetchChartData}>Load Trends</button>
        {chartData.labels && (
          <Line data={chartData} options={{ responsive: true }} />
        )}
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is a mortgage?</h3>
          <p>
            A mortgage is a loan used to purchase a home or real estate, secured
            by the property itself.
          </p>
        </div>
        <div className="faq-item">
          <h3>What affects my mortgage rate?</h3>
          <p>
            Mortgage rates can be influenced by market conditions, your credit
            score, the size of your down payment, and the loan term.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rates;
