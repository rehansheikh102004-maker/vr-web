import { ServiceCard, Metric } from '../types';

export const HERO_METRICS: Metric[] = [
  { label: 'Headset Compatibility', value: 'Meta / Apple / PCVR', subtext: 'Meta Quest 3, Vision Pro, HTC Vive & Index' },
  { label: '3D Asset Performance', value: '90+ FPS', subtext: 'Ultra-low latency real-time rendering' },
  { label: 'Active VR Deployments', value: '150+ Worlds', subtext: 'Enterprise & consumer spatial apps' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'enterprise-vr-training',
    title: 'Enterprise VR Training & Simulations',
    category: 'Simulations',
    description: 'Immersive, physics-based Virtual Reality training modules for high-risk industrial, medical, and aerospace operations.',
    metrics: '99.2% Risk Reduction',
    features: [
      'Multi-User Haptic Feedback Synchronization',
      'Physics-Driven Tool & Equipment Mechanics',
      'Real-Time Biometric & Trainee Telemetry',
      'Cross-Platform Quest 3 & Vision Pro Support'
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'webxr-3d-experiences',
    title: 'WebXR & In-Browser 3D Worlds',
    category: 'WebXR',
    description: 'Zero-friction virtual reality experiences accessible directly in modern web browsers without downloading any external apps.',
    metrics: '100% Instant Accessibility',
    features: [
      'Three.js & WebGL Custom Shader Architecture',
      'Instant Spatial Tracking & Motion Controllers',
      'Drastically Compressed 3D Asset Pipelines',
      'Seamless E-Commerce & Web3 Integrations'
    ],
    iconName: 'Globe'
  },
  {
    id: 'apple-vision-pro-apps',
    title: 'Spatial Apps for VisionOS',
    category: 'Spatial Apps',
    description: 'Next-gen spatial computing software leveraging Apple Vision Pro eye-tracking, hand-gestures, and real-world passthrough.',
    metrics: '4K Per-Eye Precision',
    features: [
      'SwiftUI & RealityKit Spatial Development',
      'Eye Gaze & Natural Hand Gesture Navigation',
      'High-Fidelity Passthrough Occlusion',
      'Custom Spatial Audio Soundscape Engines'
    ],
    iconName: 'Glasses'
  },
  {
    id: 'unreal-engine-vr',
    title: 'Meta Quest 3 & Unreal Engine 5',
    category: 'Enterprise VR',
    description: 'Photorealistic VR applications built on Unreal Engine 5 Nanite & Lumen, optimized for standalone and tethered headsets.',
    metrics: '90 FPS Constant Frame Rate',
    features: [
      'Unreal Engine 5 VR Template Architecture',
      'Photorealistic Dynamic Lighting & Shadows',
      'Custom Hand-Tracking Interaction Frameworks',
      'Dedicated Multiplayer Dedicated Server Sync'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'virtual-showrooms-3d',
    title: 'Virtual Showrooms & 3D Commerce',
    category: 'Interactive 3D',
    description: 'Photorealistic 360-degree spatial stores and virtual showrooms allowing customers to inspect products at 1:1 scale in VR.',
    metrics: '+340% Engagement Lift',
    features: [
      'High-Resolution Photogrammetry 3D Scans',
      'Real-Time Material & Color Customizers',
      'Spatial Shopping Cart & Checkout Integration',
      'Interactive Guided Virtual Avatar Tours'
    ],
    iconName: 'ShoppingBag'
  },
  {
    id: 'spatial-audio-soundscapes',
    title: '3D Spatial Audio & Binaural Engine',
    category: 'Interactive 3D',
    description: 'Directional, position-aware binaural audio engines providing lifelike acoustic immersion for VR environments.',
    metrics: '360° Acoustic Precision',
    features: [
      'Real-Time Acoustic Room Reverb Modeling',
      'Dynamic Distance Attenuation & Obstruction',
      'Spatial Voice Chat for Multiplayer VR',
      'Binaural HRTF Head-Tracking Audio'
    ],
    iconName: 'Headphones'
  }
];
