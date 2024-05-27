import React from 'react';

const Donate = () => {
  return (
    <div className="donatePage">
      <div className="stats bg-primary text-primary-content">
        <div className="stat text-center">
          <div className="stat-title">Account balance</div>
          <div className="stat-value my-6">$89,400</div>
          <div className="stat-actions flex justify-center">
            <button className="btn btn-sm btn-success">Donate</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Amount Donated</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">Deposit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
