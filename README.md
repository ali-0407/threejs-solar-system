# Interactive Solar System Explorer

A 3D interactive journey through the solar system and beyond — built with React, Three.js, and TypeScript.

---

## Links

| | |
|---|---|
| **Live demo** | [solar-system-explorer-gold.vercel.app](https://solar-system-explorer-gold.vercel.app/) |
| **Features** | [Features](#features) |
| **Quick start** | [Quick start](#quick-start) |
| **Controls** | [Controls](#controls) |

---

## What it does

Explore space from the browser: an interactive solar system with realistic orbits, themes, and deep-space objects.

- **8 planets** — orbital mechanics, rotations, tilts, colors; moons and rings where applicable  
- **8 space themes** — from Classic Dark to Aurora Green  
- **Deep space** — black holes, wormholes, nebulae, pulsars, comets, shooting stars, distant galaxies  
- **Time control** — orbital speed from 0× to 10×  
- **3D controls** — rotate, zoom, pan  
- **Info panels** — details and facts for each body

---

## Preview

*Stellar view with Sun, planets, and deep-space objects in 3D.*

---

## Features

### Solar system

- **8 planets** — distances, periods, rotations, tilts, colors, atmospheres; Earth’s moon; rings (Saturn, Uranus)  
- **Asteroid belt** — 200+ animated asteroids  
- **Sun** — glow and corona

### Deep space (toggleable)

- Milky Way, star clusters, wormhole, black hole (with lensing), comets, nebulae, pulsar, shooting stars, distant galaxies

### Customization

- **8 themes**: Classic Dark, Deep Blue, Cosmic Purple, Warm Nebula, Aurora Green, Blood Moon, Ice Cold, Galaxy Pink  
- Toggle orbits, labels, and individual objects  
- Time speed slider (pause to time-lapse)

### Learning

- Click any planet or object for size, mass, temperature, distances, and facts

---

## Tech stack

| Layer | Technology |
|-------|------------|
| UI | React 19, TypeScript 5.9 |
| 3D | Three.js, React Three Fiber, React Three Drei |
| Build | Vite |
| Styles | Tailwind CSS 4 |

---

## Quick start

**Requirements:** Node.js 18+, npm or yarn

```bash
git clone <your-repo-url>
cd solar-system-explorer
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

**Production:**

```bash
npm run build
npm run preview
```

---

## Controls

| Action | Input |
|--------|--------|
| Rotate | Click + drag |
| Zoom | Scroll / pinch |
| Pan | Right-click + drag |
| Select / info | Click planet or object |
| Theme | “Space Theme” button |
| Time speed | Slider |
| Objects | “Space Objects” panel |

---

## Tips

1. Start at 1× speed to see orbits clearly.  
2. Try different themes for different moods.  
3. Turn off extra objects for a clean solar-system view.  
4. Click everything for info.  
5. Zoom in on planets for detail.  
6. Use 10× speed to see long-term motion.

---

## Project structure

```
src/
├── components/
│   ├── Planet.tsx
│   ├── Sun.tsx
│   ├── SolarSystem.tsx
│   ├── SpaceObjects.tsx
│   ├── PlanetInfo.tsx
│   └── SpaceObjectInfo.tsx
├── data/
│   └── spaceObjects.ts
├── utils/
│   └── cn.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## Customization

**New planet** — extend `PLANETS_DATA` in `src/components/SolarSystem.tsx` (radius, distance, orbital/rotation period, colors, tilt, eccentricity).

**New theme** — add an entry to `SPACE_PALETTES` in `src/App.tsx` (name, bg, stars, nebula, accent, nebulaColors).

---

## Contributing

Ideas: more moons, spacecraft/satellites, supernovae/quasars, mobile improvements, ambient sound, i18n. Open an issue or PR.

---

## License

MIT.

---

## Acknowledgments

- Planetary data inspired by NASA solar system resources  
- Three.js and React Three Fiber communities

---

## Known issues

- Performance depends on device (3D is heavy).  
- Some objects can overlap at certain angles.  
- Mobile touch controls could be improved.

---

## Author

| | |
|---|---|
| **Name** | **Muhammad Umair Ali** |
| **Email** | [maliupwork123@gmail.com](mailto:maliupwork123@gmail.com) |

*“The cosmos is within us. We are made of star-stuff.”* — Carl Sagan

---

If you find this useful, consider starring the repo.
