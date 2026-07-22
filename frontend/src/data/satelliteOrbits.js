// src/data/satelliteOrbits.js
// Orbital parameters for maneuver planning (ManeuverPanel.jsx) and rogue
// orbit-ring rendering (App.jsx). Keyed by the same entity IDs used in
// GlobeView.jsx's SAT_TLES / DEBRIS_STATIC catalogues — keep these in sync.

// Maneuverable satellites (payloads that can execute avoidance burns).
// alt/inclination match frontend/src/data/mockData.js orbitAltitudeKm/inclination;
// tle1/tle2 match GlobeView.jsx SAT_TLES for consistent ground-track rendering.
export const SAT_ORBIT_PARAMS = {
  ISS: {
    alt: 421, inclination: 51.6,
    tle1: '1 25544U 98067A   24010.51860654  .00015509  00000-0  27915-3 0  9990',
    tle2: '2 25544  51.6416  16.2913 0004381  52.1284  87.2753 15.50117024412214',
  },
  HST: {
    alt: 537, inclination: 28.5,
    tle1: '1 20580U 90037B   24010.12345678  .00001234  00000-0  56789-4 0  9991',
    tle2: '2 20580  28.4700 200.1234 0002345 100.5678 259.4321 15.09099873456789',
  },
  SL1: {
    alt: 551, inclination: 53.0,
    tle1: '1 44713U 19074A   24010.56525141  .00001064  00000-0  83911-4 0  9991',
    tle2: '2 44713  53.0543 144.1568 0001407  83.2185 276.9030 15.06399142211516',
  },
  SL2: {
    alt: 551, inclination: 53.0,
    tle1: '1 47526U 21006BK  24010.43210000  .00000800  00000-0  60000-4 0  9992',
    tle2: '2 47526  53.0550 220.3456 0001200  90.1234 270.0000 15.06400000200000',
  },
  NOAA18: {
    alt: 854, inclination: 99.0,
    tle1: '1 28654U 05018A   24010.50000000  .00000060  00000-0  60000-4 0  9993',
    tle2: '2 28654  99.0000  45.0000 0013000  80.0000 280.0000 14.12000000900000',
  },
  TERRA: {
    alt: 716, inclination: 98.2,
    tle1: '1 25994U 99068A   24010.50000000  .00000050  00000-0  48000-4 0  9994',
    tle2: '2 25994  98.2000 120.0000 0001200 100.0000 260.0000 14.57000000800000',
  },
  METOP: {
    alt: 830, inclination: 98.7,
    tle1: '1 29499U 06044A   24010.50000000  .00000040  00000-0  38000-4 0  9995',
    tle2: '2 29499  98.7000 200.0000 0002000 120.0000 240.0000 14.21000000850000',
  },
  AQUA: {
    alt: 705, inclination: 98.2,
    tle1: '1 27424U 02022A   24010.50000000  .00000050  00000-0  48000-4 0  9996',
    tle2: '2 27424  98.2000  60.0000 0001100 110.0000 250.0000 14.57100000700000',
  },
}

// Uncontrolled debris — no TLE (simulated circular orbit from alt/inclination/lat/lon),
// matches GlobeView.jsx DEBRIS_STATIC entries referenced by mockData.js conjunctions.
export const DEBRIS_ORBIT_PARAMS = {
  DEB1:  { alt: 780, inclination: 82.9, lat: -20, lon: 80 },
  DEB2:  { alt: 845, inclination: 98.6, lat: 15,  lon: -60 },
  DEB3:  { alt: 640, inclination: 65.0, lat: 65,  lon: 30 },
  DEB4:  { alt: 776, inclination: 86.4, lat: -35, lon: 150 },
  DEB5:  { alt: 800, inclination: 74.0, lat: -10, lon: -140 },
  DEB6:  { alt: 960, inclination: 74.0, lat: 40,  lon: -20 },
  DEB7:  { alt: 495, inclination: 49.9, lat: -55, lon: -100 },
  DEB8:  { alt: 350, inclination: 51.6, lat: 25,  lon: 100 },
  DEB9:  { alt: 470, inclination: 82.6, lat: 48,  lon: 60 },
  DEB10: { alt: 490, inclination: 82.6, lat: 52,  lon: 80 },
  DEB11: { alt: 440, inclination: 82.6, lat: 44,  lon: 40 },
  DEB12: { alt: 610, inclination: 65.8, lat: -42, lon: -80 },
  DEB13: { alt: 740, inclination: 28.3, lat: 28,  lon: -120 },
  DEB14: { alt: 590, inclination: 7.0,  lat: -8,  lon: 175 },
  DEB15: { alt: 920, inclination: 99.9, lat: 70,  lon: -50 },
  DEB16: { alt: 520, inclination: 65.0, lat: -60, lon: 130 },
  DEB17: { alt: 860, inclination: 98.7, lat: 20,  lon: 90 },
  DEB18: { alt: 820, inclination: 98.5, lat: -15, lon: 160 },
  DEB19: { alt: 760, inclination: 86.5, lat: 40,  lon: -170 },
  DEB20: { alt: 790, inclination: 86.3, lat: -50, lon: 110 },
  DEB21: { alt: 410, inclination: 51.8, lat: 30,  lon: 50 },
  DEB22: { alt: 420, inclination: 51.6, lat: -30, lon: -30 },
  DEB23: { alt: 550, inclination: 28.9, lat: 35,  lon: 170 },
  DEB24: { alt: 560, inclination: 82.9, lat: -45, lon: -60 },
  DEB25: { alt: 700, inclination: 98.2, lat: 55,  lon: -130 },
  DEB26: { alt: 880, inclination: 28.9, lat: -25, lon: 20 },
  DEB27: { alt: 810, inclination: 82.6, lat: 38,  lon: -90 },
  DEB28: { alt: 670, inclination: 98.2, lat: -65, lon: 80 },
}
