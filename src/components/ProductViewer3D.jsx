import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';

export default function ProductViewer3D({ product, className }) {
  const ref = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ref.current || error) return;

    try {
      const scene = new THREE.Scene();
      scene.background = null;

      const camera = new THREE.PerspectiveCamera(
        45,
        ref.current.clientWidth / ref.current.clientHeight || 1,
        0.1,
        100,
      );
      camera.position.set(0, 1, 3);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      ref.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);

      const geometry = new THREE.BoxGeometry(1, 1.6, 0.9);
      const material = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        roughness: 0.35,
        metalness: 0.25,
      });
      const phone = new THREE.Mesh(geometry, material);
      scene.add(phone);

      const screenGeo = new THREE.PlaneGeometry(0.78, 1.4);
      const screenMat = new THREE.MeshStandardMaterial({
        color: 0x000000,
        emissive: 0x111111,
        emissiveIntensity: 0.5,
      });
      const screen = new THREE.Mesh(screenGeo, screenMat);
      screen.position.z = 0.46;
      scene.add(screen);

      const sideBtnGeo = new THREE.BoxGeometry(0.04, 0.18, 0.9);
      const sideBtn = new THREE.Mesh(sideBtnGeo, material);
      sideBtn.position.set(-0.54, 0, 0.46);
      scene.add(sideBtn);

      let frameId;
      const animate = () => {
        frameId = requestAnimationFrame(() => {
          if (!ref.current) return;
          phone.rotation.y += 0.008;
          phone.rotation.x = Math.sin(Date.now() * 0.001) * 0.05;
          renderer.render(scene, camera);
          animate();
        });
      };
      animate();

      const onResize = () => {
        if (!ref.current) return;
        camera.aspect = ref.current.clientWidth / ref.current.clientHeight || 1;
        camera.updateProjectionMatrix();
        renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
      };
      window.addEventListener('resize', onResize);

      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
        if (ref.current) {
          ref.current.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      console.error('Three.js initialization error:', err);
      setError(err.message);
    }
  }, [product, error]);

  if (error) {
    return (
      <div
        className={className || 'product-viewer-3d'}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)' }}
      >
        غير متاح
      </div>
    );
  }

  return (
    <div className={className || 'product-viewer-3d'}>
      <div className="canvas-container" ref={ref} />
    </div>
  );
}
