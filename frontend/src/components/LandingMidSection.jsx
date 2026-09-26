// import CompanyTicker from "./CompanyTicker";

import AiMailPreview from "./AiMailPreview";
import AiNotesPreview from "./AiNotesPreview";
import AiStoryWriterPreview from "./AiStoryWriterPreview";

const LandingMidSection = () => {
  return (
    <div className="text-center py-20 font-normal">
      <div className="text-2xl text-zinc-700">
        <p>
          Trusted by <span className="text-blue-600">40K+ users</span> and{" "}
          <span className="text-blue-600"> 10+ companies</span>
        </p>
      </div>
      <div className="py-20">
        <AiMailPreview />
        <AiNotesPreview />
        <AiStoryWriterPreview />
      </div>
    </div>
  );
};

export default LandingMidSection;
