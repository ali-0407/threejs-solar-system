import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense, useState, useMemo } from 'react';
import { SolarSystem } from './components/SolarSystem';
import { PlanetInfo } from './components/PlanetInfo';
import { SpaceObjectInfo } from './components/SpaceObjectInfo';
import {
  MilkyWayGalaxy,
  StarCluster,
  Wormhole,
  BlackHole,
  Comet,
  Nebula,
  Pulsar,
  ShootingStars,
  DistantGalaxies,
  SpaceDust,
} from './components/SpaceObjects';
import * as THREE from 'three';

const SPACE_PALETTES = [
  { name: 'Classic Dark', bg: '#000000', stars: '#ffffff', nebula: '#1a0033', accent: '#4a00e0', nebulaColors: ['#4a00e0', '#1a0033', '#6600ff'] },
  { name: 'Deep Blue', bg: '#020817', stars: '#a5b4fc', nebula: '#1e1b4b', accent: '#3b82f6', nebulaColors: ['#3b82f6', '#1e3a8a', '#60a5fa'] },
  { name: 'Cosmic Purple', bg: '#0d001a', stars: '#e879f9', nebula: '#4a044e', accent: '#a855f7', nebulaColors: ['#a855f7', '#7c3aed', '#c084fc'] },
  { name: 'Warm Nebula', bg: '#1a0a00', stars: '#fcd34d', nebula: '#7c2d12', accent: '#f97316', nebulaColors: ['#f97316', '#dc2626', '#fbbf24'] },
  { name: 'Aurora Green', bg: '#001a0d', stars: '#86efac', nebula: '#14532d', accent: '#22c55e', nebulaColors: ['#22c55e', '#15803d', '#4ade80'] },
  { name: 'Blood Moon', bg: '#0a0000', stars: '#fca5a5', nebula: '#450a0a', accent: '#dc2626', nebulaColors: ['#dc2626', '#991b1b', '#f87171'] },
  { name: 'Ice Cold', bg: '#000a1a', stars: '#67e8f9', nebula: '#083344', accent: '#06b6d4', nebulaColors: ['#06b6d4', '#0891b2', '#22d3ee'] },
  { name: 'Galaxy Pink', bg: '#1a0010', stars: '#f9a8d4', nebula: '#500724', accent: '#ec4899', nebulaColors: ['#ec4899', '#db2777', '#f472b6'] },
];

interface SpaceObjectVisibility {
  milkyWay: boolean;
  starClusters: boolean;
  wormhole: boolean;
  blackHole: boolean;
  comets: boolean;
  nebula: boolean;
  pulsar: boolean;
  shootingStars: boolean;
  distantGalaxies: boolean;
}

export function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [selectedSpaceObject, setSelectedSpaceObject] = useState<string | null>(null);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [paletteIndex, setPaletteIndex] = useState(2);
  const [showOrbits, setShowOrbits] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [showSpacePanel, setShowSpacePanel] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [showLegends, setShowLegends] = useState(true);
  
  const [spaceObjects, setSpaceObjects] = useState<SpaceObjectVisibility>({
    milkyWay: true,
    starClusters: true,
    wormhole: true,
    blackHole: true,
    comets: true,
    nebula: true,
    pulsar: true,
    shootingStars: true,
    distantGalaxies: true,
  });

  const palette = SPACE_PALETTES[paletteIndex];
  const backgroundColor = useMemo(() => new THREE.Color(palette.bg), [palette.bg]);

  const toggleSpaceObject = (key: keyof SpaceObjectVisibility) => {
    setSpaceObjects(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePlanetSelect = (name: string) => {
    setSelectedPlanet(name);
    setSelectedSpaceObject(null);
  };

  const handleSpaceObjectSelect = (key: string) => {
    setSelectedSpaceObject(key);
    setSelectedPlanet(null);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden" style={{ backgroundColor: palette.bg }}>
      <Canvas
        camera={{ position: [0, 80, 180], fov: 55 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.5;
        }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={[backgroundColor]} />
          <fog attach="fog" args={[palette.bg, 300, 600]} />
          <ambientLight intensity={0.05} color={palette.accent} />
          
          {/* Multi-layer background stars */}
          <Stars radius={400} depth={150} count={5000} factor={4} saturation={0.5} fade speed={0.3} />
          <Stars radius={350} depth={100} count={3000} factor={6} saturation={0.3} fade speed={0.2} />
          <Stars radius={300} depth={80} count={2000} factor={8} saturation={0.1} fade speed={0.1} />
          
          {/* Space dust particles */}
          <SpaceDust count={5000} color={palette.stars} />
          
          {/* SPACE OBJECTS */}
          
          {/* Milky Way Galaxy in background */}
          {spaceObjects.milkyWay && (
            <MilkyWayGalaxy color={palette.accent} onSelect={() => handleSpaceObjectSelect('milkyWay')} />
          )}
          
          {/* Star Clusters */}
          {spaceObjects.starClusters && (
            <>
              <StarCluster position={[150, 80, -200]} count={400} radius={25} color="#ffffff" onSelect={() => handleSpaceObjectSelect('starClusters')} />
              <StarCluster position={[-180, 60, -180]} count={300} radius={20} color={palette.stars} onSelect={() => handleSpaceObjectSelect('starClusters')} />
              <StarCluster position={[80, -50, -250]} count={350} radius={22} color="#ffe4b5" onSelect={() => handleSpaceObjectSelect('starClusters')} />
            </>
          )}
          
          {/* Wormhole */}
          {spaceObjects.wormhole && (
            <Wormhole position={[-150, 30, -100]} scale={1.5} color={palette.accent} onSelect={() => handleSpaceObjectSelect('wormhole')} />
          )}
          
          {/* Black Hole */}
          {spaceObjects.blackHole && (
            <BlackHole position={[180, -40, -150]} scale={2} onSelect={() => handleSpaceObjectSelect('blackHole')} />
          )}
          
          {/* Comets */}
          {spaceObjects.comets && (
            <>
              <Comet startPosition={[100, 50, -50]} speed={0.8} color="#00ffff" onSelect={() => handleSpaceObjectSelect('comets')} />
              <Comet startPosition={[-80, 30, -80]} speed={1.2} color="#ffffff" onSelect={() => handleSpaceObjectSelect('comets')} />
            </>
          )}
          
          {/* Nebulae */}
          {spaceObjects.nebula && (
            <>
              <Nebula 
                position={[200, 100, -350]} 
                scale={1.5} 
                colors={palette.nebulaColors} 
                onSelect={() => handleSpaceObjectSelect('nebula')}
              />
              <Nebula 
                position={[-250, -50, -300]} 
                scale={1.2} 
                colors={[palette.accent, palette.nebula, palette.stars]} 
                onSelect={() => handleSpaceObjectSelect('nebula')}
              />
            </>
          )}
          
          {/* Pulsar */}
          {spaceObjects.pulsar && (
            <Pulsar position={[-120, 100, -200]} color={palette.accent} onSelect={() => handleSpaceObjectSelect('pulsar')} />
          )}
          
          {/* Shooting Stars */}
          {spaceObjects.shootingStars && (
            <ShootingStars count={8} color={palette.stars} />
          )}
          
          {/* Distant Galaxies */}
          {spaceObjects.distantGalaxies && (
            <DistantGalaxies count={15} onSelect={() => handleSpaceObjectSelect('distantGalaxies')} />
          )}
          
          {/* Solar System */}
          <SolarSystem 
            speedMultiplier={speedMultiplier} 
            onPlanetClick={handlePlanetSelect}
            showOrbits={showOrbits}
            showLabels={showLabels}
            accentColor={palette.accent}
          />
          
          <OrbitControls 
            enablePan={true} 
            enableZoom={true} 
            enableRotate={true}
            minDistance={15}
            maxDistance={500}
            autoRotate={speedMultiplier === 0}
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
      
      {/* UI Overlay - Title */}
      <div className="absolute top-4 left-4 text-white">
        <h1 className="text-4xl font-bold mb-1 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r" 
                style={{ backgroundImage: `linear-gradient(to right, ${palette.accent}, ${palette.stars})` }}>
            Solar System
          </span>
        </h1>
        <p className="text-sm opacity-60">Interactive 3D Space Exploration</p>
      </div>

      {/* Main Controls Panel */}
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xl p-5 rounded-2xl text-white border border-white/10 space-y-4 w-80">
        {/* Time Speed */}
        <div>
          <label className="block text-xs uppercase tracking-wider opacity-60 mb-2">Time Speed</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={speedMultiplier}
              onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
              className="flex-1 accent-current h-2 rounded-full"
              style={{ accentColor: palette.accent }}
            />
            <span className="text-sm font-mono w-12 text-right">{speedMultiplier.toFixed(1)}x</span>
          </div>
        </div>

        {/* Space Theme Button */}
        <div>
          <label className="block text-xs uppercase tracking-wider opacity-60 mb-2">Space Theme</label>
          <button
            onClick={() => setShowThemeModal(true)}
            className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-all relative overflow-hidden group"
            style={{ 
              background: `linear-gradient(135deg, ${palette.bg} 0%, ${palette.nebula} 50%, ${palette.accent} 100%)`
            }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            <div className="relative flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span>🎨</span>
                <span>{palette.name}</span>
              </span>
              <span className="text-xs opacity-60 bg-black/30 px-2 py-1 rounded">Change</span>
            </div>
          </button>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowOrbits(!showOrbits)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              showOrbits 
                ? 'bg-white/20 border border-white/30' 
                : 'bg-white/5 border border-white/10 opacity-60'
            }`}
          >
            {showOrbits ? '◉' : '○'} Orbits
          </button>
          <button
            onClick={() => setShowLabels(!showLabels)}
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              showLabels 
                ? 'bg-white/20 border border-white/30' 
                : 'bg-white/5 border border-white/10 opacity-60'
            }`}
          >
            {showLabels ? '◉' : '○'} Labels
          </button>
        </div>

        {/* Space Objects Toggle */}
        <button
          onClick={() => setShowSpacePanel(!showSpacePanel)}
          className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600/50 to-blue-600/50 border border-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2"
        >
          <span>🌌</span>
          <span>Space Objects</span>
          <span className={`transition-transform ${showSpacePanel ? 'rotate-180' : ''}`}>▼</span>
        </button>
      </div>

      {/* Space Objects Panel */}
      {showSpacePanel && (
        <div className="absolute bottom-4 left-[22rem] bg-black/70 backdrop-blur-xl p-5 rounded-2xl text-white border border-white/10 w-64 animate-fade-in">
          <h3 className="text-xs uppercase tracking-wider opacity-60 mb-3">Toggle Space Objects</h3>
          <div className="space-y-2">
            {[
              { key: 'milkyWay', label: 'Milky Way Galaxy', icon: '🌌' },
              { key: 'starClusters', label: 'Star Clusters', icon: '✨' },
              { key: 'wormhole', label: 'Wormhole', icon: '🕳️' },
              { key: 'blackHole', label: 'Black Hole', icon: '⚫' },
              { key: 'comets', label: 'Comets', icon: '☄️' },
              { key: 'nebula', label: 'Nebulae', icon: '🌫️' },
              { key: 'pulsar', label: 'Pulsar', icon: '💫' },
              { key: 'shootingStars', label: 'Shooting Stars', icon: '🌠' },
              { key: 'distantGalaxies', label: 'Distant Galaxies', icon: '🔭' },
            ].map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => toggleSpaceObject(key as keyof SpaceObjectVisibility)}
                className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  spaceObjects[key as keyof SpaceObjectVisibility]
                    ? 'bg-white/20 border border-white/30' 
                    : 'bg-white/5 border border-white/10 opacity-60'
                }`}
              >
                <span>{icon}</span>
                <span className="flex-1 text-left">{label}</span>
                <span className="text-xs opacity-60">
                  {spaceObjects[key as keyof SpaceObjectVisibility] ? 'ON' : 'OFF'}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Planet Info Panel */}
      {selectedPlanet && (
        <PlanetInfo 
          planetName={selectedPlanet} 
          onClose={() => setSelectedPlanet(null)}
          accentColor={palette.accent}
        />
      )}

      {/* Space Object Info Panel */}
      {selectedSpaceObject && (
        <SpaceObjectInfo 
          objectKey={selectedSpaceObject} 
          onClose={() => setSelectedSpaceObject(null)}
          accentColor={palette.accent}
        />
      )}

      {/* Legend Toggle Button */}
      <button
        onClick={() => setShowLegends(!showLegends)}
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all"
        title={showLegends ? "Hide Legends" : "Show Legends"}
      >
        {showLegends ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        )}
      </button>

      {/* Legends Container */}
      {showLegends && (
        <div className="animate-fade-in">
          {/* Planet Legend */}
          <div className="absolute top-16 right-4 bg-black/60 backdrop-blur-md p-4 rounded-2xl text-white border border-white/10 text-sm w-48">
            <h3 className="font-semibold mb-3 text-xs uppercase tracking-wider opacity-60">Planets</h3>
            <div className="space-y-2">
              {[
                { name: 'Mercury', color: '#B5B5B5' },
                { name: 'Venus', color: '#E6C87A' },
                { name: 'Earth', color: '#4A90D9' },
                { name: 'Mars', color: '#C1440E' },
                { name: 'Jupiter', color: '#D8CA9D' },
                { name: 'Saturn', color: '#C9A227' },
                { name: 'Uranus', color: '#7FDBFF' },
                { name: 'Neptune', color: '#4169E1' },
              ].map(({ name, color }) => (
                <button
                  key={name}
                  onClick={() => setSelectedPlanet(name)}
                  className="flex items-center gap-2 w-full hover:bg-white/10 px-2 py-1 rounded-lg transition-all"
                >
                  <div 
                    className="w-3 h-3 rounded-full shadow-lg"
                    style={{ 
                      backgroundColor: color,
                      boxShadow: `0 0 8px ${color}60`
                    }}
                  />
                  <span className="opacity-80">{name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Space Objects Legend */}
          <div className="absolute top-[380px] right-4 bg-black/60 backdrop-blur-md p-4 rounded-2xl text-white border border-white/10 text-sm w-48">
            <h3 className="font-semibold mb-3 text-xs uppercase tracking-wider opacity-60">Space Objects</h3>
            <div className="space-y-1 text-xs opacity-70">
              <p>🌌 Milky Way (background)</p>
              <p>🕳️ Wormhole (left)</p>
              <p>⚫ Black Hole (right)</p>
              <p>💫 Pulsar (top left)</p>
              <p>☄️ Comets (orbiting)</p>
            </div>
          </div>
        </div>
      )}

      {/* Theme Modal */}
      {showThemeModal && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gray-900 border border-white/10 rounded-3xl p-6 max-w-2xl w-full relative shadow-2xl">
            <button 
              onClick={() => setShowThemeModal(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-2">Choose Space Theme</h2>
            <p className="text-white/60 mb-6">Select a color palette to customize your cosmic journey.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SPACE_PALETTES.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => {
                    setPaletteIndex(i);
                    setShowThemeModal(false);
                  }}
                  className={`group relative aspect-video rounded-xl overflow-hidden transition-all duration-300 ${
                    i === paletteIndex ? 'ring-2 ring-white scale-105' : 'hover:scale-105 hover:ring-1 hover:ring-white/50'
                  }`}
                >
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${p.bg} 0%, ${p.nebula} 50%, ${p.accent} 100%)` 
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-white font-medium text-sm">{p.name}</span>
                  </div>
                  
                  {i === paletteIndex && (
                    <div className="absolute top-2 right-2 bg-white text-black rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowThemeModal(false)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 right-4 text-white/40 text-xs text-right space-y-1">
        <p>🖱️ Drag to rotate view</p>
        <p>🔍 Scroll to zoom in/out</p>
        <p>👆 Click planet for details</p>
        <p>🎮 Use controls to customize</p>
      </div>
    </div>
  );
}
