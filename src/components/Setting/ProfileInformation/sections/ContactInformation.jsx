const ContactInformation = ({ formData, onChange }) => (
  <div className="bg-white rounded-lg shadow p-4 mb-4">
    <h2 className="text-sm font-bold text-[#15171C] mb-3">CONTACT INFORMATION</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[#343434] text-[14px] font-medium">
          Email address
        </label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          type="email"
          placeholder="Email address"
          className="w-full border border-[#E4E4E4] rounded px-3 py-2 text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-[#343434] text-[14px] font-medium">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          type="text"
          placeholder="Phone number"
          className="w-full border border-[#E4E4E4] rounded px-3 py-2 text-sm"
        />
      </div>
    </div>
  </div>
);

export default ContactInformation;
