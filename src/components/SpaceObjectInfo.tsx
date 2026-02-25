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
      className="ui-panel glass-panel absolute bottom-5 right-5 w-80 p-5 text-white rounded-2xl shadow-2xl animate-slide-up z-20"
      style={{ 
        boxShadow: `0 0 32px ${accentColor}15`,
        borderColor: `${accentColor}25`
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 
            className="text-xl font-bold tracking-tight"
            style={{ color: accentColor }}
          >
            {info.name}
          </h2>
          <p className="text-[11px] font-medium uppercase tracking-widest text-white/40 mt-0.5">{info.type}</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-white/40 hover:text-white rounded-lg hover:bg-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      
      <p className="text-white/75 text-[13px] mb-4 leading-relaxed">{info.description}</p>
      
      <div className="grid grid-cols-2 gap-2 text-[13px] mb-4">
        <InfoCard label="Distance" value={info.distance} />
        <InfoCard label="Size" value={info.size} />
        <InfoCard label="Temperature" value={info.temperature} />
        <InfoCard label="Mass" value={info.mass} />
      </div>

      <div 
        className="p-3 rounded-xl text-[13px]"
        style={{ backgroundColor: `${accentColor}12`, border: `1px solid ${accentColor}25` }}
      >
        <span className="text-[11px] font-medium uppercase tracking-widest text-white/45">Did you know?</span>
        <p className="mt-1 font-medium" style={{ color: accentColor }}>{info.funFact}</p>
      </div>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 border border-white/5 p-2.5 rounded-xl">
      <div className="text-[11px] font-medium uppercase tracking-widest text-white/40">{label}</div>
      <div className="font-medium mt-0.5 text-white/90 text-[13px]">{value}</div>
    </div>
  );
}
