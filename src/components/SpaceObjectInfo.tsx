import { SPACE_OBJECTS_DATA } from '../data/spaceObjects';

interface SpaceObjectInfoProps {
  objectKey: string;
  onClose: () => void;
  accentColor: string;
}

export function SpaceObjectInfo({ objectKey, onClose, accentColor }: SpaceObjectInfoProps) {
  const info = SPACE_OBJECTS_DATA[objectKey];

  if (!info) return null;

  return (
    <div 
      className="absolute bottom-4 right-4 w-96 bg-black/80 backdrop-blur-xl rounded-2xl p-5 text-white border border-white/10 shadow-2xl animate-fade-in z-20"
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
            {info.name}
          </h2>
          <p className="text-xs opacity-50 uppercase tracking-wider">{info.type}</p>
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
        <InfoCard label="Distance" value={info.distance} />
        <InfoCard label="Size" value={info.size} />
        <InfoCard label="Temperature" value={info.temperature} />
        <InfoCard label="Mass" value={info.mass} />
      </div>

      <div 
        className="p-3 rounded-xl text-sm"
        style={{ backgroundColor: `${accentColor}15` }}
      >
        <span className="text-xs uppercase tracking-wider opacity-60">Did you know?</span>
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
