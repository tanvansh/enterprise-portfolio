"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

const COUNT = 110;
const LINK_DIST = 1.55;
const BOUNDS = { x: 7, y: 4, z: 2.5 };
const MAX_LINKS = COUNT * 8;

function Network({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();
  const mouse = useRef(new THREE.Vector2(999, 999));
  const tmp = useMemo(() => new THREE.Color(), []);
  const glow = useMemo(() => new THREE.Color("#818cf8"), []);
  const indigo = useMemo(() => new THREE.Color("#6366f1"), []);

  const { positions, velocities, linePositions, lineColors } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() * 2 - 1) * BOUNDS.x;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * BOUNDS.y;
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * BOUNDS.z;
      velocities[i * 3] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return {
      positions,
      velocities,
      linePositions: new Float32Array(MAX_LINKS * 6),
      lineColors: new Float32Array(MAX_LINKS * 6),
    };
  }, []);

  useFrame((state, delta) => {
    const dt = Math.min(delta * 60, 2);
    // Pointer in world units on the z=0 plane
    mouse.current.set((state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2);
    const mx = mouse.current.x;
    const my = mouse.current.y;

    if (!reduced) {
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        for (let a = 0; a < 3; a++) {
          positions[ix + a] += velocities[ix + a] * dt;
          const b = a === 0 ? BOUNDS.x : a === 1 ? BOUNDS.y : BOUNDS.z;
          if (positions[ix + a] > b || positions[ix + a] < -b) velocities[ix + a] *= -1;
        }
        // Gentle repulsion from the cursor
        const dx = positions[ix] - mx;
        const dy = positions[ix + 1] - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < 2.2) {
          const f = (2.2 - d2) * 0.006 * dt;
          positions[ix] += dx * f;
          positions[ix + 1] += dy * f;
        }
      }
    }

    // Rebuild connections between nearby nodes
    let n = 0;
    for (let i = 0; i < COUNT && n < MAX_LINKS; i++) {
      const ix = i * 3;
      for (let j = i + 1; j < COUNT && n < MAX_LINKS; j++) {
        const jx = j * 3;
        const dx = positions[ix] - positions[jx];
        const dy = positions[ix + 1] - positions[jx + 1];
        const dz = positions[ix + 2] - positions[jx + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d >= LINK_DIST) continue;

        const alpha = 1 - d / LINK_DIST;
        // Links near the cursor glow brighter and shift toward violet
        const cx = (positions[ix] + positions[jx]) / 2 - mx;
        const cy = (positions[ix + 1] + positions[jx + 1]) / 2 - my;
        const near = Math.max(0, 1 - Math.sqrt(cx * cx + cy * cy) / 2.5);
        tmp.copy(glow).lerp(indigo, 1 - near);
        const k = alpha * (0.22 + near * 0.78);

        const o = n * 6;
        linePositions[o] = positions[ix];
        linePositions[o + 1] = positions[ix + 1];
        linePositions[o + 2] = positions[ix + 2];
        linePositions[o + 3] = positions[jx];
        linePositions[o + 4] = positions[jx + 1];
        linePositions[o + 5] = positions[jx + 2];
        lineColors[o] = lineColors[o + 3] = tmp.r * k;
        lineColors[o + 1] = lineColors[o + 4] = tmp.g * k;
        lineColors[o + 2] = lineColors[o + 5] = tmp.b * k;
        n++;
      }
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
    if (linesRef.current) {
      const g = linesRef.current.geometry;
      g.setDrawRange(0, n * 2);
      g.attributes.position.needsUpdate = true;
      g.attributes.color.needsUpdate = true;
    }

    if (group.current) {
      const targetY = reduced ? 0 : state.pointer.x * 0.12;
      const targetX = reduced ? 0 : -state.pointer.y * 0.08;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.03;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.03;
    }
  });

  return (
    <group ref={group}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} color="#818cf8" transparent opacity={0.85} sizeAttenuation depthWrite={false} />
      </points>
      <lineSegments ref={linesRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[lineColors, 3]} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent blending={THREE.AdditiveBlending} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

export default function NetworkCanvas() {
  const [reduced, setReduced] = useState(false);
  const [eventSource, setEventSource] = useState<HTMLElement | undefined>(undefined);

  useEffect(() => {
    // Track the pointer over the whole page so overlaid hero content does not block it
    setEventSource(document.body);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      eventSource={eventSource}
      eventPrefix="client"
    >
      <AdaptiveDpr pixelated={false} />
      <Network reduced={reduced} />
    </Canvas>
  );
}
