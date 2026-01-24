# 🌌 Interactive Solar System Explorer

<div align="center">

![Solar System](https://img.shields.io/badge/Solar%20System-3D%20Interactive-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-000000?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)

**A breathtaking 3D journey through our solar system and beyond**

[Live Demo](#) • [Features](#-features) • [Quick Start](#-quick-start) • [Controls](#-controls)

</div>

---

## ✨ What Makes This Special?

Ever wanted to explore space from your browser? This isn't just another solar system visualization—it's an **interactive cosmic playground** where you can:

- 🪐 **Explore all 8 planets** with scientifically accurate orbital mechanics
- 🌈 **Switch between 8 stunning space themes** (from Classic Dark to Aurora Green)
- 🌌 **Discover deep space objects**: black holes, wormholes, nebulae, pulsars, and more
- ⏱️ **Control time itself** with adjustable orbital speeds (0x to 10x)
- 🎮 **Fully interactive 3D controls** - rotate, zoom, and pan freely
- 📚 **Learn as you explore** with detailed information panels for every celestial body

## 🎬 Preview

<div align="center">

```
     ✨        🌍         ☄️
        🌞              
   🪐              🌙
        ⭐    🌌    ⭐
```

*Imagine this, but in stunning 3D with real physics*

</div>

## 🚀 Features

### 🌍 Realistic Solar System
- **8 Planets** with accurate:
  - Orbital distances and periods
  - Rotation speeds and axial tilts
  - Colors and atmospheric effects
  - Moons (Earth's moon included!)
  - Planetary rings (Saturn & Uranus)
- **Asteroid Belt** with 200+ animated asteroids
- **The Sun** with dynamic glow and corona effects

### 🌌 Deep Space Objects
Toggle visibility of cosmic wonders:
- 🌌 **Milky Way Galaxy** - Our home in the cosmos
- ✨ **Star Clusters** - Globular clusters scattered across space
- 🕳️ **Wormhole** - Einstein-Rosen bridge (theoretical!)
- ⚫ **Black Hole** - With gravitational lensing effects
- ☄️ **Comets** - Orbiting with beautiful tails
- 🌫️ **Nebulae** - Stellar nurseries in vibrant colors
- 💫 **Pulsar** - Rotating neutron star with beams
- 🌠 **Shooting Stars** - Meteors streaking across the sky
- 🔭 **Distant Galaxies** - Billions of light years away

### 🎨 Customization
- **8 Space Themes**:
  - Classic Dark
  - Deep Blue
  - Cosmic Purple
  - Warm Nebula
  - Aurora Green
  - Blood Moon
  - Ice Cold
  - Galaxy Pink
- Toggle orbits, labels, and individual space objects
- Adjustable time speed (pause, slow-mo, or time-lapse)

### 📖 Educational Content
Click any planet or space object to learn:
- Physical characteristics (size, mass, temperature)
- Distance from Earth/Sun
- Fascinating facts and trivia
- Scientific classifications

## 🛠️ Tech Stack

Built with cutting-edge web technologies:

- **React 19** - Latest React with concurrent features
- **Three.js** - Powerful 3D graphics engine
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern utility-first styling
- **Vite** - Lightning-fast build tool

## 📦 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd solar-system-explorer

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and start exploring! 🚀

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🎮 Controls

| Action | Control |
|--------|---------|
| **Rotate View** | Click + Drag |
| **Zoom In/Out** | Mouse Wheel / Pinch |
| **Pan Camera** | Right Click + Drag |
| **Select Planet** | Click on any planet |
| **View Info** | Click planet/object for details |
| **Change Theme** | Click "Space Theme" button |
| **Adjust Speed** | Use time speed slider |
| **Toggle Objects** | Use "Space Objects" panel |

## 🎯 Usage Tips

1. **Start Slow**: Begin with 1x speed to appreciate the orbital mechanics
2. **Explore Themes**: Try different color palettes—each creates a unique atmosphere
3. **Hide Clutter**: Toggle off space objects for a cleaner view of the solar system
4. **Learn**: Click everything! Each object has fascinating information
5. **Find Hidden Details**: Zoom in close to planets to see surface details and atmospheres
6. **Time Travel**: Crank up the speed to 10x and watch years pass in seconds

## 📁 Project Structure

```
src/
├── components/
│   ├── Planet.tsx          # Individual planet component
│   ├── Sun.tsx             # Sun with corona effects
│   ├── SolarSystem.tsx     # Main solar system orchestrator
│   ├── SpaceObjects.tsx    # Deep space objects (black holes, nebulae, etc.)
│   ├── PlanetInfo.tsx      # Planet information panel
│   └── SpaceObjectInfo.tsx # Space object information panel
├── data/
│   └── spaceObjects.ts     # Educational content and data
├── utils/
│   └── cn.ts               # Utility functions
├── App.tsx                 # Main application component
├── main.tsx                # Application entry point
└── index.css               # Global styles
```

## 🎨 Customization

### Adding a New Planet

Edit `src/components/SolarSystem.tsx`:

```typescript
const PLANETS_DATA = [
  // ... existing planets
  {
    name: 'YourPlanet',
    radius: 1.5,
    distance: 45,
    orbitalPeriod: 1000,
    rotationPeriod: 2,
    colors: ['#FF0000', '#00FF00'],
    tilt: 15,
    eccentricity: 0.05,
  }
];
```

### Creating a New Theme

Edit the `SPACE_PALETTES` array in `src/App.tsx`:

```typescript
{
  name: 'Your Theme',
  bg: '#000000',
  stars: '#ffffff',
  nebula: '#1a0033',
  accent: '#4a00e0',
  nebulaColors: ['#4a00e0', '#1a0033', '#6600ff']
}
```

## 🤝 Contributing

Contributions are welcome! Here are some ideas:

- 🌙 Add more moons to other planets
- 🛸 Include spacecraft or satellites
- 🌟 Add more space phenomena (supernovae, quasars)
- 📱 Improve mobile responsiveness
- 🎵 Add ambient space sounds
- 🌐 Internationalization support

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Planetary data based on NASA's solar system exploration
- Three.js community for amazing 3D capabilities
- React Three Fiber team for the excellent React integration

## 🐛 Known Issues

- Performance may vary on older devices (3D rendering is intensive)
- Some space objects may overlap at certain camera angles
- Mobile touch controls could be improved

## 📮 Contact

Have questions or suggestions? Feel free to open an issue!
OR you can mail me at yaksh.inbox@gmail.com

---

<div align="center">

**Made with ❤️ by Yaksh Devani**

*"The cosmos is within us. We are made of star-stuff."* - Carl Sagan

⭐ Star this repo if you enjoyed exploring space!

</div>
