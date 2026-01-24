import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Planet } from './Planet';
import { Sun } from './Sun';
import { Line } from '@react-three/drei';

// Real orbital data (scaled for visualization)
const PLANETS_DATA = [
  {
    name: 'Mercury',
    radius: 0.5,
    distance: 12,
    orbitalPeriod: 88,
    rotationPeriod: 58.6,
    colors: ['#8C8C8C', '#A0A0A0', '#696969'],
    tilt: 0.03,
    eccentricity: 0.205,
    atmosphere: null,
    features: 'craters',
  },
  {
    name: 'Venus',
    radius: 1.1,
    distance: 18,
    orbitalPeriod: 225,
    rotationPeriod: -243,
    colors: ['#E6C87A', '#D4A84B', '#C9922A'],
    tilt: 177.4,
    eccentricity: 0.007,
    atmosphere: { color: '#E6D5A8', opacity: 0.6, scale: 1.08 },
    features: 'clouds',
  },
  {
    name: 'Earth',
    radius: 1.2,
    distance: 24,
    orbitalPeriod: 365,
    rotationPeriod: 1,
    colors: ['#4A90D9', '#2E5A1C', '#8B7355'],
    tilt: 23.4,
    eccentricity: 0.017,
    hasMoon: true,
    atmosphere: { color: '#87CEEB', opacity: 0.3, scale: 1.05 },
    features: 'continents',
  },
  {
    name: 'Mars',
    radius: 0.7,
    distance: 32,
    orbitalPeriod: 687,
    rotationPeriod: 1.03,
    colors: ['#C1440E', '#8B2500', '#CD5C5C'],
    tilt: 25.2,
    eccentricity: 0.093,
    atmosphere: { color: '#FFB6C1', opacity: 0.15, scale: 1.03 },
    features: 'terrain',
  },
  {
    name: 'Jupiter',
    radius: 4,
    distance: 52,
    orbitalPeriod: 4333,
    rotationPeriod: 0.41,
    colors: ['#D8CA9D', '#C4A668', '#8B7355', '#CD853F'],
    tilt: 3.1,
    eccentricity: 0.049,
    atmosphere: { color: '#DEB887', opacity: 0.2, scale: 1.02 },
    features: 'bands',
  },
  {
    name: 'Saturn',
    radius: 3.5,
    distance: 70,
    orbitalPeriod: 10759,
    rotationPeriod: 0.45,
    colors: ['#C9A227', '#DAA520', '#F4A460'],
    tilt: 26.7,
    eccentricity: 0.057,
    hasRings: true,
    atmosphere: { color: '#F5DEB3', opacity: 0.15, scale: 1.02 },
    features: 'bands',
  },
  {
    name: 'Uranus',
    radius: 2.2,
    distance: 90,
    orbitalPeriod: 30687,
    rotationPeriod: -0.72,
    colors: ['#7FDBFF', '#5CACEE', '#87CEEB'],
    tilt: 97.8,
    eccentricity: 0.046,
    hasRings: true,
    ringColor: '#B0C4DE',
    ringOpacity: 0.3,
    atmosphere: { color: '#B0E0E6', opacity: 0.3, scale: 1.04 },
    features: 'ice',
  },
  {
    name: 'Neptune',
    radius: 2.1,
    distance: 110,
    orbitalPeriod: 60190,
    rotationPeriod: 0.67,
    colors: ['#4169E1', '#1E90FF', '#0000CD'],
    tilt: 28.3,
    eccentricity: 0.009,
    atmosphere: { color: '#6495ED', opacity: 0.35, scale: 1.04 },
    features: 'storms',
  },
];

interface SolarSystemProps {
  speedMultiplier: number;
  onPlanetClick: (name: string) => void;
  showOrbits: boolean;
  showLabels: boolean;
  accentColor: string;
}

export function SolarSystem({ speedMultiplier, onPlanetClick, showOrbits, showLabels, accentColor }: SolarSystemProps) {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      {/* Sun at center */}
      <Sun />

      {/* Asteroid belt between Mars and Jupiter */}
      <AsteroidBelt innerRadius={40} outerRadius={48} count={200} speedMultiplier={speedMultiplier} />

      {/* Planets */}
      {PLANETS_DATA.map((planet) => (
        <Planet
          key={planet.name}
          {...planet}
          speedMultiplier={speedMultiplier}
          onClick={() => onPlanetClick(planet.name)}
          showLabel={showLabels}
        />
      ))}

      {/* Orbit paths */}
      {showOrbits && PLANETS_DATA.map((planet) => (
        <OrbitPath 
          key={`orbit-${planet.name}`} 
          distance={planet.distance} 
          eccentricity={planet.eccentricity}
          color={accentColor}
        />
      ))}
    </group>
  );
}

function OrbitPath({ distance, eccentricity, color }: { distance: number; eccentricity: number; color: string }) {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    const segments = 128;

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const r = distance * (1 - eccentricity * eccentricity) / (1 + eccentricity * Math.cos(theta));
      pts.push([Math.cos(theta) * r, 0, Math.sin(theta) * r]);
    }

    return pts;
  }, [distance, eccentricity]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={1}
      transparent
      opacity={0.2}
    />
  );
}

function AsteroidBelt({ innerRadius, outerRadius, count, speedMultiplier }: { 
  innerRadius: number; 
  outerRadius: number; 
  count: number;
  speedMultiplier: number;
}) {
  const asteroidRef = useRef<THREE.InstancedMesh>(null);
  
  const { speeds, basePositions } = useMemo(() => {
    const speeds: number[] = [];
    const basePositions: { angle: number; radius: number; y: number }[] = [];
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      const y = (Math.random() - 0.5) * 2;
      
      basePositions.push({ angle, radius, y });
      speeds.push(0.1 + Math.random() * 0.2);
    }
    
    return { speeds, basePositions };
  }, [innerRadius, outerRadius, count]);

  useFrame((state) => {
    if (!asteroidRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < count; i++) {
      const { angle, radius, y } = basePositions[i];
      const currentAngle = angle + time * speeds[i] * 0.1 * speedMultiplier;
      
      const matrix = new THREE.Matrix4();
      const scale = 0.05 + (i % 10) * 0.015;
      matrix.compose(
        new THREE.Vector3(Math.cos(currentAngle) * radius, y, Math.sin(currentAngle) * radius),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(time * speeds[i], time * speeds[i] * 0.5, 0)),
        new THREE.Vector3(scale, scale, scale)
      );
      asteroidRef.current.setMatrixAt(i, matrix);
    }
    asteroidRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={asteroidRef} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#8B7355" roughness={0.9} metalness={0.1} />
    </instancedMesh>
  );
}

export { PLANETS_DATA };
