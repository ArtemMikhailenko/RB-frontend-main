const SocialProfilesSection = ({ formData, onChange }) => (
  <div className="bg-white rounded-lg shadow p-4 mb-4">
    <h2 className="text-sm font-bold text-[#15171C] mb-7">SOCIAL PROFILES</h2>
    <div className="space-y-3">
      {Object.keys(formData.socialProfiles).map((platform) => (
        <div key={platform} className="flex flex-col gap-2 text-[14px] font-medium">
          <label htmlFor={`socialProfiles.${platform}`}>{platform}</label>
          <input
            id={`socialProfiles.${platform}`}
            name={`socialProfiles.${platform}`}
            type="text"
            value={formData.socialProfiles[platform]}
            onChange={onChange}
            className="w-full border border-[#E4E4E4] rounded px-3 py-2 text-sm"
          />
        </div>
      ))}
    </div>
  </div>
);

export default SocialProfilesSection;
