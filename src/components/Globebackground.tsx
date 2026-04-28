import { useEffect, useRef } from "react";

// ── Exact locations from EXPERIENCES in constants.ts ──
const LOCATIONS = [
  { lat: 30.08, lng: 78.26, label: "Rishikesh" },
  { lat: 32.24, lng: 77.18, label: "Manali" },
  { lat: 27.15, lng: 88.26, label: "Darjeeling" },
  { lat: 27.35, lng: 88.60, label: "Sikkim" },
  { lat: 10.08, lng: 77.06, label: "Munnar" },
  { lat: 25.46, lng: 91.88, label: "Meghalaya" },
  { lat: 15.30, lng: 73.95, label: "Goa" },
  { lat: 24.58, lng: 73.71, label: "Udaipur" },
  { lat: 26.91, lng: 75.79, label: "Jaipur" },
  { lat: 25.00, lng: 85.43, label: "Rajgir" },
  { lat: 12.30, lng: 76.65, label: "Mysore" },
  { lat: 17.38, lng: 78.48, label: "Hyderabad" },
  { lat: 12.97, lng: 77.59, label: "Bangalore" },
  { lat: 27.55, lng: 84.87, label: "Valmiki Nagar" },
  { lat: 24.65, lng: 93.90, label: "Manipur" },
];

function project(lat: number, lng: number, cx: number, cy: number, r: number, rotY: number) {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lng * Math.PI) / 180 + rotY;
  const x3 = Math.sin(phi) * Math.cos(theta);
  const y3 = Math.cos(phi);
  const z3 = Math.sin(phi) * Math.sin(theta);
  return { x: cx + r * x3, y: cy - r * y3, z: z3, visible: z3 > 0.05 };
}

// Land regions for dot-map rendering
const LAND_REGIONS: [number, number, number, number, number][] = [
  [36, 71, -10, 40, 3],
  [50, 75, 30, 180, 4],
  [55, 72, -140, -60, 4],
  [25, 72, -140, -52, 3],
  [-56, 12, -82, -34, 3],
  [-35, 37, -18, 52, 3],
  [6, 37, 62, 98, 1.4],   // India subcontinent — dense
  [23, 53, 98, 135, 2],
  [30, 45, 129, 146, 2],
  [-44, -10, 113, 154, 2],
  [12, 42, 32, 62, 3],
  [60, 84, -58, -18, 4],
  [50, 61, -10, 2, 2],
  [-11, 6, 95, 141, 3],
  [4, 20, 116, 127, 2],
  [55, 71, 4, 32, 2],
  [36, 44, -10, 4, 2],
  [-2, 15, 38, 52, 2],
  [5, 10, 79, 82, 1],
  [-25, -12, 43, 51, 2],
  [7, 25, -92, -60, 2],
];

// Build once
const LAND_DOTS: [number, number][] = [];
(function () {
  const rng = (n: number) => (Math.random() - 0.5) * n;
  LAND_REGIONS.forEach(([latMin, latMax, lngMin, lngMax, step]) => {
    for (let lat = latMin; lat <= latMax; lat += step)
      for (let lng = lngMin; lng <= lngMax; lng += step)
        LAND_DOTS.push([lat + rng(step * 0.45), lng + rng(step * 0.45)]);
  });
})();

// ── Smart label offset table ──
// Pre-defined offsets so labels never stack on each other
// [dx, dy] from pin center — positive dx = right, negative = left
const LABEL_OFFSETS: Record<string, [number, number]> = {
  "Rishikesh":     [-95, -18],
  "Manali":        [-72, -28],
  "Darjeeling":    [ 14,  -18],
  "Sikkim":        [ 14,   8],
  "Munnar":        [-80,  10],
  "Meghalaya":     [ 14,  -18],
  "Goa":           [-68,  14],
  "Udaipur":       [-76,  -8],
  "Jaipur":        [-68,  14],
  "Rajgir":        [ 14,  10],
  "Mysore":        [-72,  14],
  "Hyderabad":     [ 14,  -8],
  "Bangalore":     [ 14,  14],
  "Valmiki Nagar": [-90, -18],
  "Manipur":       [ 14,   0],
};

export function GlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotRef    = useRef(1.05); // Start showing India
  const drag      = useRef({ active: false, prevX: 0, vel: 0 });
  const pulseRef  = useRef(0);
  const rafRef    = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;

    const resize = () => {
      const dpr    = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const onDown = (e: MouseEvent) => { drag.current = { active: true, prevX: e.clientX, vel: 0 }; };
    const onMove = (e: MouseEvent) => {
      if (!drag.current.active) return;
      const dx = e.clientX - drag.current.prevX;
      drag.current.vel   = dx * 0.005;
      rotRef.current    += dx * 0.005;
      drag.current.prevX = e.clientX;
    };
    const onUp = () => { drag.current.active = false; };
    canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup",   onUp);

    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);

      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      if (!drag.current.active) {
        drag.current.vel *= 0.93;
        rotRef.current   += 0.0025 + drag.current.vel;
      }
      pulseRef.current += 0.04;

      const cx = W / 2;
      const cy = H / 2;
      const R  = Math.min(W, H) * 0.43;

      // Globe body
      const grd = ctx.createRadialGradient(cx - R * 0.28, cy - R * 0.28, R * 0.04, cx, cy, R);
      grd.addColorStop(0,   "#1e40af");   // bright blue
        grd.addColorStop(0.6, "#0f172a");   // dark navy
        grd.addColorStop(1,   "#020617");   // deep black
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Atmosphere rim
      const atm = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.15);
      atm.addColorStop(0,   "rgba(30,100,255,0)");
      atm.addColorStop(0.5, "rgba(30,100,255,0.08)");
      atm.addColorStop(1,   "rgba(30,100,255,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.15, 0, Math.PI * 2);
      ctx.fillStyle = atm;
      ctx.fill();

      // Clip to sphere
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R - 0.5, 0, Math.PI * 2);
      ctx.clip();

      // Grid
      ctx.strokeStyle = "rgba(212,175,55,0.06)";
      ctx.lineWidth   = 0.5;
      for (let lat = -75; lat <= 75; lat += 15) {
        ctx.beginPath();
        let first = true;
        for (let lng = -180; lng <= 180; lng += 3) {
          const p = project(lat, lng, cx, cy, R, rotRef.current);
          if (!p.visible) { first = true; continue; }
          first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          first = false;
        }
        ctx.stroke();
      }
      for (let lng = -180; lng <= 180; lng += 15) {
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 3) {
          const p = project(lat, lng, cx, cy, R, rotRef.current);
          if (!p.visible) { first = true; continue; }
          first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          first = false;
        }
        ctx.stroke();
      }

      // Land dots
    //   LAND_DOTS.forEach(([lat, lng]) => {
    //     const p = project(lat, lng, cx, cy, R, rotRef.current);
    //     if (!p.visible) return;
    //     const alpha   = 0.12 + 0.7 * Math.max(0, p.z);
    //     const isIndia = lat >= 6 && lat <= 38 && lng >= 66 && lng <= 98;
    //     if (isIndia) {
    //       ctx.fillStyle = `rgba(120,220,120,${Math.min(1, alpha + 0.22)})`;
    //       ctx.beginPath();
    //       ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
    //     } else {
    //       ctx.fillStyle = `rgba(70,130,230,${alpha})`;
    //       ctx.beginPath();
    //       ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
    //     }
    //     ctx.fill();
    //   });

      ctx.restore(); // end clip

      // ── Pins pass 1: glows (behind labels) ──
      const projected = LOCATIONS.map((loc, i) => ({
        ...loc,
        p: project(loc.lat, loc.lng, cx, cy, R, rotRef.current),
        i,
      })).filter(l => l.p.visible && l.p.z > 0.1);

projected.forEach(({ p, i, lat, lng, label }) => {
  const pulse = 1 + 0.38 * Math.sin(pulseRef.current + i * 1.1);
  const ringR = (4.5 + 2.5 * p.z) * pulse;

  // 🔥 Outer glow
  const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, ringR * 3);
  glow.addColorStop(0, `rgba(212,175,55,${0.22 * p.z})`);
  glow.addColorStop(1, "rgba(212,175,55,0)");
  ctx.beginPath();
  ctx.arc(p.x, p.y, ringR * 3, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();

  // 🔥 Ring
  ctx.beginPath();
  ctx.arc(p.x, p.y, ringR, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(212,175,55,${(0.65 / pulse) * p.z + 0.08})`;
  ctx.lineWidth = 1.4;
  ctx.stroke();

  // 🔥 Dot
  const isIndiaLocation =
    lat >= 6 && lat <= 38 && lng >= 66 && lng <= 98;

  const dotRadius = 3 + p.z * 1.5;

  ctx.beginPath();
  ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);

  ctx.fillStyle = isIndiaLocation
    ? "rgba(0,255,120,0.9)"
    : "rgba(255,215,0,0.8)";

  ctx.fill();
});
    };
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup",   onUp);
      canvas.removeEventListener("mousedown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", cursor: "grab", display: "block" }}
    />
  );
}