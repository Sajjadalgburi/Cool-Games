import { CHECKOUT_QUERY } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';

import AuthService from '../../utils/auth'; // Updated import for AuthService

const stripePromise = loadStripe(
  'pk_test_51PLATxEnm35MOLPGixDbrRgKTTDhXPORxPBLTUvkq9fGDw2PVDCF4j7PrxtuS36MYWSIuiIqXpGX7NLtKL0T4YiL00GFrJPFi0',
);

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(5);
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.loggedIn());

  const { register } = useForm();

  const handleInputChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const [checkout, { data }] = useLazyQuery(CHECKOUT_QUERY);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const handleSubmit = () => {
    if (AuthService.loggedIn()) {
      checkout({
        variables: {
          donation: {
            amount: parseInt(donationAmount),
          },
        },
      });
    } else {
      alert('You must be logged in to make a donation!');
    }
  };

  useEffect(() => {
    setIsLoggedIn(AuthService.loggedIn());
  }, []);

  return (
    <div className="donatePage">
      <div className="stats bg-primary text-primary-content">
        <div className="stat text-center">
          <label htmlFor="donationAmount">Enter Donation Amount</label>
          <input
            {...register('donation', { min: 1 })}
            id="donationAmount"
            type="number"
            placeholder="Enter amount"
            value={donationAmount}
            onChange={handleInputChange}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div className="stat-actions flex justify-center">
            <button onClick={handleSubmit} className="btn btn-sm btn-success">
              Confirm Donation!
            </button>
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
