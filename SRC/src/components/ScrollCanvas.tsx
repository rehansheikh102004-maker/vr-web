import React, { useEffect, useRef } from 'react';

interface ScrollCanvasProps {
  id: string;
  containerId: string;
  frameCount?: number;
  isFixed?: boolean;
}

export const ScrollCanvas: React.FC<ScrollCanvasProps> = ({
  id,
  containerId,
  frameCount = 240,
  isFixed = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const container = document.getElementById(containerId) || document.body;
    const bitmaps: (ImageBitmap | HTMLImageElement)[] = new Array(frameCount);
    let loadedCount = 0;
    let targetFrame = 0;
    let lastDrawnFrame = -1;

    function sizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function draw(bitmap: ImageBitmap | HTMLImageElement) {
      if (!bitmap || !ctx || !canvas) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = (bitmap as HTMLImageElement).naturalWidth || bitmap.width;
      const ih = (bitmap as HTMLImageElement).naturalHeight || bitmap.height;
      if (!iw || !ih) return;

      const ir = iw / ih;
      const cr = cw / ch;
      let sx = 0, sy = 0, sw = iw, sh = ih;

      if (cr > ir) {
        sw = iw;
        sh = iw / cr;
        sx = 0;
        sy = (ih - sh) * 0.5;
      } else {
        sh = ih;
        sw = ih * cr;
        sx = (iw - sw) * 0.5;
        sy = 0;
      }

      ctx.drawImage(bitmap, sx, sy, sw, sh, 0, 0, cw, ch);
    }

    function drawFirstAvailable() {
      for (let k = 0; k < frameCount; k++) {
        if (bitmaps[k]) {
          draw(bitmaps[k]);
          lastDrawnFrame = k;
          break;
        }
      }
    }

    function getPath(i: number) {
      if (id === 'scroll-canvas-2') {
        const num = Math.min(240, Math.max(1, i + 1));
        return `/vr_only/ezgif-frame-${String(num).padStart(3, '0')}.jpg`;
      } else {
        const num = Math.min(240, Math.max(32, 32 + Math.round((i / (frameCount - 1)) * 208)));
        return `/ezgif-frame-${String(num).padStart(3, '0')}.jpg`;
      }
    }

    function preload() {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.decoding = 'async';
        img.src = getPath(i);

        img.onload = function () {
          if (typeof createImageBitmap === 'function') {
            createImageBitmap(img)
              .then((bmp) => {
                bitmaps[i] = bmp;
                loadedCount++;
                if (loadedCount === 1) {
                  sizeCanvas();
                  drawFirstAvailable();
                }
              })
              .catch(() => {
                bitmaps[i] = img;
                loadedCount++;
                if (loadedCount === 1) {
                  sizeCanvas();
                  drawFirstAvailable();
                }
              });
          } else {
            bitmaps[i] = img;
            loadedCount++;
            if (loadedCount === 1) {
              sizeCanvas();
              drawFirstAvailable();
            }
          }
        };
        img.onerror = () => {
          // ignore
        };
      }
    }

    function calcFrame() {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollTop = -rect.top;
      const maxScroll = rect.height - window.innerHeight;
      if (maxScroll <= 0) {
        targetFrame = 0;
        return;
      }

      let f = scrollTop / maxScroll;
      if (f < 0) f = 0;
      if (f > 1) f = 1;

      targetFrame = Math.round(f * (frameCount - 1));

      if (isFixed && canvas) {
        const bottom = rect.bottom;
        canvas.style.visibility = bottom > 0 ? 'visible' : 'hidden';
      }
    }

    let animId: number;
    function loop() {
      let bmp = bitmaps[targetFrame];
      if (!bmp) {
        for (let diff = 1; diff < frameCount; diff++) {
          if (targetFrame - diff >= 0 && bitmaps[targetFrame - diff]) {
            bmp = bitmaps[targetFrame - diff];
            break;
          }
          if (targetFrame + diff < frameCount && bitmaps[targetFrame + diff]) {
            bmp = bitmaps[targetFrame + diff];
            break;
          }
        }
      }
      if (bmp && targetFrame !== lastDrawnFrame) {
        draw(bmp);
        lastDrawnFrame = targetFrame;
      }
      animId = requestAnimationFrame(loop);
    }

    const onScroll = () => calcFrame();
    const onResize = () => {
      sizeCanvas();
      calcFrame();
      lastDrawnFrame = -1;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    sizeCanvas();
    preload();
    calcFrame();
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, [id, containerId, frameCount, isFixed]);

  const style: React.CSSProperties = isFixed
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        display: 'block',
        pointerEvents: 'none',
      }
    : {
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        pointerEvents: 'none',
      };

  return <canvas id={id} ref={canvasRef} style={style} />;
};
