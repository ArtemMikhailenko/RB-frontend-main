"use client";
import React, { useEffect, useState } from 'react';
import { getTaxInformation, updateTaxInformation } from '@/services/taxService';

const TaxInformation = ({ userId }) => {
  const [taxInfo, setTaxInfo] = useState({
    companyName: '',
    taxId: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchTaxInfo() {
      try {
        const data = await getTaxInformation(userId);
        setTaxInfo(data);
      } catch (err) {
        console.error(err);
        alert(err.message || 'Failed to load tax information');
      } finally {
        setLoading(false);
      }
    }
    fetchTaxInfo();
  }, [userId]);

  const handleChange = (e) => {
    setTaxInfo({ ...taxInfo, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateTaxInformation(taxInfo);
      alert('Tax information updated successfully');
    } catch (err) {
      console.error(err);
      alert(err.message || 'Failed to update tax information');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex justify-center sm:-mt-8 mt-3">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 max-sm:gap-4">
          <div className="text-xl font-semibold text-gray-800">
            Tax information
            <p className="text-sm text-gray-500 font-light">
              Update your tax address information for invoicing and legal compliance.
            </p>
          </div>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>

        {/* Address Form */}
        <div className="p-4 bg-white rounded-md shadow-sm mb-4">
          <h2 className="text-sm font-semibold text-black mb-4">Tax address information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#343434] text-[14px] font-medium">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={taxInfo.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#343434] text-[14px] font-medium">Tax ID / VAT Number</label>
              <input
                type="text"
                name="taxId"
                value={taxInfo.taxId}
                onChange={handleChange}
                placeholder="Enter tax ID"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              value={taxInfo.addressLine1}
              onChange={handleChange}
              placeholder="Enter"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              value={taxInfo.addressLine2}
              onChange={handleChange}
              placeholder="Enter"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">City</label>
              <input
                type="text"
                name="city"
                value={taxInfo.city}
                onChange={handleChange}
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">State</label>
              <input
                type="text"
                name="state"
                value={taxInfo.state}
                onChange={handleChange}
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={taxInfo.zipCode}
                onChange={handleChange}
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={taxInfo.country}
                onChange={handleChange}
                placeholder="Enter"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Tax Document Section */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-1">TAX DOCUMENT</h2>
          <p className="text-sm text-gray-500 mb-10">
            View and download your tax-related documents.
          </p>

          <div className="text-sm text-gray-400 text-center h-30 flex items-center justify-center w-full">
            No tax document available yet
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxInformation;
