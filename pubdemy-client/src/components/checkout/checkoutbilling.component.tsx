// CheckoutBillingAddress.tsx
import React from "react";

interface CheckoutBillingAddressProps {
  countries: string[];
  states: string[];
}

const CheckoutBillingAddress: React.FC<CheckoutBillingAddressProps> = ({ countries, states }) => {
  return (
    <div className="mb-4">
      <h2>Billing Address</h2>
      <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="d-flex justify-content-between">
                                    <label htmlFor="country" className="form-label">
                                        Country
                                    </label>
                                    <p className="text-secondary">Required</p>
                                </div>
                                <select className="form-select" id="country">
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-between">
                                    <label htmlFor="state" className="form-label">
                                        State
                                    </label>
                                    <p className="text-secondary">Required</p>
                                </div>
                                <select className="form-select" id="state">
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>
                                            {state}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <p className="text-secondary mt-2 ms-2" style={{ fontSize: "0.8rem" }}>
                                Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
                            </p>
                        </div>
    </div>
  );
};

export default CheckoutBillingAddress;
