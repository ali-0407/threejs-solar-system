interface PlanetInfoProps {
  planetName: string;
  onClose: () => void;
  accentColor: string;
}

const PLANET_DETAILS: Record<string, {
  description: string;
  diameter: string;
  dayLength: string;
  yearLength: string;
  moons: number;
  temperature: string;
  funFact: string;
  composition: string;
}> = {
  Mercury: {
    description: "The smallest planet in our solar system and closest to the Sun. Despite its proximity, it's not the hottest planet.",
    diameter: "4,879 km",
    dayLength: "59 Earth days",
    yearLength: "88 Earth days",
    moons: 0,
    temperature: "-180°C to 430°C",
    funFact: "A year on Mercury is shorter than its day!",
    composition: "Iron core, rocky surface",
  },
  Venus: {
    description: "Often called Earth's twin due to similar size. Has a toxic atmosphere with clouds of sulfuric acid.",
    diameter: "12,104 km",
    dayLength: "243 Earth days",
    yearLength: "225 Earth days",
    moons: 0,
    temperature: "465°C average",
    funFact: "Venus rotates backwards compared to other planets!",
    composition: "Dense CO₂ atmosphere, volcanic surface",
  },
  Earth: {
    description: "Our home planet, the only known planet to harbor life. 71% of its surface is covered in water.",
    diameter: "12,756 km",
    dayLength: "24 hours",
    yearLength: "365.25 days",
    moons: 1,
    temperature: "15°C average",
    funFact: "Earth is the only planet not named after a god.",
    composition: "Iron core, silicate mantle, water oceans",
  },
  Mars: {
    description: "The Red Planet, named after the Roman god of war. Home to the largest volcano in the solar system.",
    diameter: "6,792 km",
    dayLength: "24.6 hours",
    yearLength: "687 Earth days",
    moons: 2,
    temperature: "-65°C average",
    funFact: "Olympus Mons is 3x taller than Mount Everest!",
    composition: "Iron oxide surface, CO₂ atmosphere",
  },
  Jupiter: {
    description: "The largest planet in our solar system, a gas giant with the Great Red Spot - a storm larger than Earth.",
    diameter: "142,984 km",
    dayLength: "10 hours",
    yearLength: "12 Earth years",
    moons: 95,
    temperature: "-110°C average",
    funFact: "Jupiter has 95 known moons including Ganymede, the largest moon!",
    composition: "Hydrogen and helium gas",
  },
  Saturn: {
    description: "Famous for its beautiful ring system made of ice and rock particles. The least dense planet.",
    diameter: "120,536 km",
    dayLength: "10.7 hours",
    yearLength: "29 Earth years",
    moons: 146,
    temperature: "-140°C average",
    funFact: "Saturn could float in water if you had a big enough ocean!",
    composition: "Gas giant with icy rings",
  },
  Uranus: {
    description: "An ice giant that rotates on its side, appearing to roll around the Sun. Discovered in 1781.",
    diameter: "51,118 km",
    dayLength: "17 hours",
    yearLength: "84 Earth years",
    moons: 27,
    temperature: "-195°C average",
    funFact: "Uranus has a 98° axial tilt - it spins on its side!",
    composition: "Ice and rock with hydrogen atmosphere",
  },
  Neptune: {
    description: "The windiest planet with speeds reaching 2,100 km/h. The farthest planet from the Sun.",
    diameter: "49,528 km",
    dayLength: "16 hours",
    yearLength: "165 Earth years",
    moons: 16,
    temperature: "-200°C average",
    funFact: "Neptune was discovered through mathematical predictions!",
    composition: "Ice giant with methane atmosphere",
  },
};

export function PlanetInfo({ planetName, onClose, accentColor }: PlanetInfoProps) {
  const info = PLANET_DETAILS[planetName];

  if (!info) return null;

  return (
    <div 
      className="absolute bottom-4 right-4 w-96 bg-black/70 backdrop-blur-xl rounded-2xl p-5 text-white border border-white/10 shadow-2xl animate-fade-in"
      style={{ 
        boxShadow: `0 0 40px ${accentColor}20`,
        borderColor: `${accentColor}30`
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 
            className="text-2xl font-bold"
            style={{ color: accentColor }}
          >
            {planetName}
          </h2>
          <p className="text-xs opacity-50 uppercase tracking-wider">Planet Profile</p>
        </div>
        <button
          onClick={onClose}
          className="text-white/40 hover:text-white transition-colors text-xl p-1 hover:bg-white/10 rounded-lg"
        >
          ✕
        </button>
      </div>
      
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{info.description}</p>
      
      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
        <InfoCard label="Diameter" value={info.diameter} />
        <InfoCard label="Day Length" value={info.dayLength} />
        <InfoCard label="Year Length" value={info.yearLength} />
        <InfoCard label="Moons" value={info.moons.toString()} />
        <InfoCard label="Temperature" value={info.temperature} />
        <InfoCard label="Composition" value={info.composition} />
      </div>

      <div 
        className="p-3 rounded-xl text-sm"
        style={{ backgroundColor: `${accentColor}15` }}
      >
        <span className="text-xs uppercase tracking-wider opacity-60">Fun Fact</span>
        <p className="mt-1" style={{ color: accentColor }}>{info.funFact}</p>
      </div>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
      <div className="text-white/40 text-xs uppercase tracking-wider">{label}</div>
      <div className="font-medium mt-0.5">{value}</div>
    </div>
  );
}
