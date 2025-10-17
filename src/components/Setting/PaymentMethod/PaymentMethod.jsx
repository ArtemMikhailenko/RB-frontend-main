import React from "react";
import PaymentMethodHeader from "./sections/PaymentMethodHeader";
import PaymentCard from "./sections/PaymentCard";
import BillingAddressForm from "./sections/BillingAddressForm";
import BillingPreferences from "./sections/BillingPreferences";
import AddressForm from "./sections/AddressForm";
import CompanyPreference from "./sections/CompanyPreference";

const PaymentMethod = () => {
  return (
    <div className=" flex justify-center sm:-mt-8 mt-3">
      <div className="w-full max-w-3xl ">
        {/* Header */}
        <PaymentMethodHeader />
        {/*Payment Method*/}
        <PaymentCard />
        {/* Address */}
        <BillingAddressForm />
        {/* Billing Preferences */}
        <BillingPreferences />
        {/* Address */}
        <AddressForm />
        {/* Visibility Settings Section */}
        <CompanyPreference />
      </div>
    </div>
  );
};

export default PaymentMethod;
