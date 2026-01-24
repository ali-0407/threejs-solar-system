export const SPACE_OBJECTS_DATA: Record<string, {
  name: string;
  type: string;
  description: string;
  distance: string;
  size: string;
  temperature: string;
  mass: string;
  funFact: string;
}> = {
  milkyWay: {
    name: "Milky Way Galaxy",
    type: "Barred Spiral Galaxy",
    description: "Our home galaxy, a vast collection of stars, gas, and dust bound together by gravity. It contains our Solar System and billions of other stars.",
    distance: "0 light years (we are inside it)",
    size: "100,000 light years diameter",
    temperature: "Varies (avg -270°C in space)",
    mass: "1.5 trillion solar masses",
    funFact: "The Milky Way is on a collision course with the Andromeda Galaxy, expected to merge in about 4.5 billion years."
  },
  starClusters: {
    name: "Globular Cluster",
    type: "Star Cluster",
    description: "A spherical collection of stars that orbits a galactic core. Globular clusters are very tightly bound by gravity, which gives them their spherical shapes.",
    distance: "25,000 light years",
    size: "100-200 light years",
    temperature: "Varies by star type",
    mass: "100,000 solar masses",
    funFact: "Globular clusters are among the oldest known objects in the universe, some almost as old as the universe itself."
  },
  wormhole: {
    name: "Einstein-Rosen Bridge",
    type: "Wormhole",
    description: "A theoretical passage through space-time that could create shortcuts for long journeys across the universe. Wormholes are predicted by the theory of general relativity.",
    distance: "Unknown / Theoretical",
    size: "Hypothetical",
    temperature: "Unknown",
    mass: "Negative mass required",
    funFact: "While mathematically possible, we have never observed a wormhole in reality. They might be microscopic and unstable."
  },
  blackHole: {
    name: "Supermassive Black Hole",
    type: "Black Hole",
    description: "A region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it.",
    distance: "26,000 light years (Sagittarius A*)",
    size: "24 million km diameter",
    temperature: "Near absolute zero (Hawking radiation)",
    mass: "4 million solar masses",
    funFact: "Time slows down near a black hole due to the intense gravitational field, a phenomenon known as time dilation."
  },
  comets: {
    name: "Halley's Comet",
    type: "Comet",
    description: "A short-period comet visible from Earth every 75–76 years. It is the only known short-period comet that is regularly visible to the naked eye from Earth.",
    distance: "0.59 AU (at perihelion)",
    size: "11 km diameter",
    temperature: "Sublimates when near sun",
    mass: "2.2 × 10^14 kg",
    funFact: "Comets are often referred to as 'dirty snowballs' because they consist of ice, dust, and rocky particles."
  },
  nebula: {
    name: "Stellar Nebula",
    type: "Nebula",
    description: "A giant cloud of dust and gas in space. Some nebulae come from the gas and dust thrown out by the explosion of a dying star, such as a supernova.",
    distance: "1,344 light years (Orion Nebula)",
    size: "24 light years",
    temperature: "10,000°C",
    mass: "2,000 solar masses",
    funFact: "Nebulae are often 'stellar nurseries' - places where stars are born."
  },
  pulsar: {
    name: "Pulsar",
    type: "Neutron Star",
    description: "A highly magnetized rotating neutron star that emits beams of electromagnetic radiation out of its magnetic poles. This radiation can be observed only when a beam of emission is pointing toward Earth.",
    distance: "1,000 light years",
    size: "20 km diameter",
    temperature: "1,000,000°C",
    mass: "1.4 solar masses",
    funFact: "Pulsars can rotate hundreds of times per second. The fastest known pulsar spins at 716 times per second."
  },
  shootingStars: {
    name: "Meteor",
    type: "Space Debris",
    description: "A small rocky or metallic body in outer space. When it enters the Earth's atmosphere, it burns up, creating a streak of light often called a 'shooting star'.",
    distance: "80-100 km (altitude)",
    size: "Millimeters to meters",
    temperature: "1,600°C (during entry)",
    mass: "Grams to kilograms",
    funFact: "Millions of meteors enter Earth's atmosphere every day, but most are the size of a grain of sand."
  },
  distantGalaxies: {
    name: "Distant Galaxy",
    type: "Galaxy",
    description: "A massive system of stars, stellar remnants, interstellar gas, dust, and dark matter bound together by gravity. There are estimated to be 200 billion to 2 trillion galaxies in the observable universe.",
    distance: "Millions to Billions of light years",
    size: "Thousands to Millions of light years",
    temperature: "Varies",
    mass: "Billions of solar masses",
    funFact: "Looking at distant galaxies is looking back in time. We see them as they were millions of years ago."
  }
};
