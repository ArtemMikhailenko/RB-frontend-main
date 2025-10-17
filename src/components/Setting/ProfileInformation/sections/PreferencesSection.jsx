const languages = ["English", "Spanish"];
const timezones = ["GMT", "PST"];

const PreferencesSection = ({ formData, onChange }) => (
  <div className="bg-white rounded-lg shadow p-4 mb-4">
    <h2 className="text-sm font-bold text-[#15171C] mb-3">PREFERENCES</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      {/* Language */}
      <div className="relative flex flex-col gap-2">
        <label
          htmlFor="language"
          className="text-[#343434] text-[14px] font-medium"
        >
          Language
        </label>
        <div className="relative">
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={onChange}
            className="appearance-none w-full border text-[#636363] border-[#E4E4E4] rounded px-3 py-2 text-sm pr-10"
          >
            <option value="">Select</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          {/* Custom SVG */}
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Timezone */}
      <div className="relative flex flex-col gap-2">
        <label
          htmlFor="timezone"
          className="text-[#343434] text-[14px] font-medium"
        >
          Time zone
        </label>
        <div className="relative">
          <select
            id="timezone"
            name="timezone"
            value={formData.timezone}
            onChange={onChange}
            className="appearance-none w-full text-[#636363] border-[#E4E4E4] border rounded px-3 py-2 text-sm pr-10"
          >
            <option value="">Select</option>
            {timezones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
          {/* Custom SVG */}
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default PreferencesSection;
