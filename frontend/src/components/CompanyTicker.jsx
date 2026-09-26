import CompanyTicker from "./CompanyTicker";

const logos = [
  "/logos/google.svg",
  "/logos/microsoft.svg",
  "/logos/meta.svg",
  "/logos/apple.svg",
  "/logos/vercel.svg",
  "/logos/tailwindcss.svg",
  "/logos/railway.svg",
  "/logos/elevenlabs.svg",
  "/logos/nvidia.svg",
  "/logos/cursor.svg",
  "/logos/lovable.svg",
  "/logos/openai.svg",
  "/logos/amazon.svg",
];

const CompanyLogos = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max gap-6 animate-ticker">
        {[...logos, ...logos].map((logo, index) => (
          <CompanyTicker key={index} logos={logo} />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;