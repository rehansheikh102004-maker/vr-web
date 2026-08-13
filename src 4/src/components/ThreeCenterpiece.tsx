import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCenterpieceProps {
  interactive?: boolean;
  wireframe?: boolean;
  glowColor?: string;
  metalColor?: string;
  rotationSpeed?: number;
  scale?: number;
}

export const ThreeCenterpiece: React.FC<ThreeCenterpieceProps> = ({
  glowColor = '#ff5500',
  metalColor = '#e2e8f0',
  rotationSpeed = 0.004,
  wireframe = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Main Group holding both rings
    const mainGroup = new THREE.Group();
    // Slight default tilt to match reference camera angle
    mainGroup.rotation.x = 0.15;
    mainGroup.rotation.y = -0.1;
    scene.add(mainGroup);

    // Lighting setup for glossy metallic & glass reflections
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.0);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xff8833, 2.5);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
    topLight.position.set(0, 5, 2);
    scene.add(topLight);

    // Point lights for internal glow
    const pointGlow1 = new THREE.PointLight(glowColor, 12, 8);
    pointGlow1.position.set(-0.8, 0, 0.2);
    mainGroup.add(pointGlow1);

    const pointGlow2 = new THREE.PointLight('#ff3300', 12, 8);
    pointGlow2.position.set(0.8, 0, 0.2);
    mainGroup.add(pointGlow2);

    // Materials
    // Glass/Chrome Torus Material
    const chromeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(metalColor),
      metalness: 0.9,
      roughness: 0.1,
      wireframe: wireframe,
    });

    // Darker Metallic Collar Material
    const collarMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#94a3b8'),
      metalness: 0.95,
      roughness: 0.2,
      wireframe: wireframe,
    });

    // Glowing Fiber/Spike Material
    const spikeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(glowColor),
    });

    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ffcc00'),
    });

    // Helper to create a complete ring assembly with collars and inner tendrils
    const createRingAssembly = (isLeft: boolean) => {
      const ringGroup = new THREE.Group();

      // Main Torus Ring
      const torusRadius = 1.05;
      const tubeRadius = 0.26;
      const torusGeo = new THREE.TorusGeometry(torusRadius, tubeRadius, 40, 100);
      const mainRing = new THREE.Mesh(torusGeo, chromeMat);
      ringGroup.add(mainRing);

      // Inner Core Glow Tube
      const innerTorusGeo = new THREE.TorusGeometry(torusRadius, 0.08, 16, 64);
      const innerRing = new THREE.Mesh(innerTorusGeo, innerCoreMat);
      ringGroup.add(innerRing);

      // Metallic Collars / Bands around the ring
      const collarCount = 6;
      for (let c = 0; c < collarCount; c++) {
        const collarAngle = (c / collarCount) * Math.PI * 2;
        const collarGeo = new THREE.TorusGeometry(tubeRadius + 0.02, 0.03, 16, 32);
        const collar = new THREE.Mesh(collarGeo, collarMat);

        // Position on main torus radius
        collar.position.x = Math.cos(collarAngle) * torusRadius;
        collar.position.y = Math.sin(collarAngle) * torusRadius;
        collar.rotation.z = collarAngle + Math.PI / 2;
        ringGroup.add(collar);
      }

      // Fiery Tendrils / Coral-like Spikes inside the tube
      const tendrilCount = 350;
      const coneGeo = new THREE.ConeGeometry(0.02, 0.4, 5);
      coneGeo.translate(0, 0.2, 0);

      for (let i = 0; i < tendrilCount; i++) {
        const tendril = new THREE.Mesh(coneGeo, spikeMat);
        const angle = (i / tendrilCount) * Math.PI * 2;
        
        // Concentrate tendrils on outer half or specific sectors as in image
        const radialOffset = (Math.random() - 0.5) * 0.15;
        const r = torusRadius + radialOffset;

        tendril.position.x = Math.cos(angle) * r;
        tendril.position.y = Math.sin(angle) * r;
        tendril.position.z = (Math.random() - 0.5) * 0.25;

        // Point outward from ring center
        tendril.rotation.z = angle + Math.PI / 2 + (Math.random() - 0.5) * 0.6;
        tendril.rotation.x = (Math.random() - 0.5) * 1.2;

        const s = 0.5 + Math.random() * 0.8;
        tendril.scale.set(s, s * 1.3, s);

        ringGroup.add(tendril);
      }

      return ringGroup;
    };

    // Create Left Ring & Right Ring and interlock them horizontally
    const leftRingGroup = createRingAssembly(true);
    leftRingGroup.position.x = -0.7;
    leftRingGroup.rotation.y = Math.PI / 3.2; // Angle left ring
    leftRingGroup.rotation.x = Math.PI / 12;

    const rightRingGroup = createRingAssembly(false);
    rightRingGroup.position.x = 0.7;
    rightRingGroup.rotation.y = -Math.PI / 3.2; // Angle right ring through left
    rightRingGroup.rotation.x = -Math.PI / 12;

    mainGroup.add(leftRingGroup);
    mainGroup.add(rightRingGroup);

    // Interactive mouse drag rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      mainGroup.rotation.y += deltaX * 0.008;
      mainGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animId: number;
    const animate = () => {
      if (!isDragging) {
        mainGroup.rotation.y += rotationSpeed;
        leftRingGroup.rotation.z += rotationSpeed * 0.5;
        rightRingGroup.rotation.z -= rotationSpeed * 0.5;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      chromeMat.dispose();
      collarMat.dispose();
      spikeMat.dispose();
      innerCoreMat.dispose();
    };
  }, [glowColor, metalColor, rotationSpeed, wireframe]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] sm:min-h-[380px] md:min-h-[440px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
    />
  );
};

