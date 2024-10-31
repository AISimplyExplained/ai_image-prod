'use client';
import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function BloodDropPage() {
  const canvasRefs = [useRef(null), useRef(null), useRef(null)];
  const animContainerRefs = [useRef(null), useRef(null), useRef(null)];
  const overlayContainerRefs = [useRef(null), useRef(null), useRef(null)];
  const stagesRef = useRef([]);

  const animations = [
    { label: '25% Fill', jsFile: '/blood_drop_25.js' },
    { label: '50% Fill', jsFile: '/blood_drop_50.js' },
    { label: '75% Fill', jsFile: '/blood_drop_75.js' },
  ];

  useEffect(() => {
    if (typeof window.createjs !== 'undefined' && typeof window.AdobeAn !== 'undefined') {
      initializeAnimations();
    }

    return () => {
      stagesRef.current.forEach(stage => {
        if (stage) {
          window.createjs.Ticker.removeEventListener('tick', stage);
        }
      });
    };
  }, []);

  const initializeAnimations = () => {
    animations.forEach((_, index) => {
      initSingleAnimation(
        canvasRefs[index].current,
        animContainerRefs[index].current,
        overlayContainerRefs[index].current,
        index
      );
    });
  };

  const initSingleAnimation = (canvas, animContainer, overlayContainer, index) => {
    if (!canvas || !animContainer || !overlayContainer) return;

    const { AdobeAn, createjs } = window;
    canvas.width = 1000;
    canvas.height = 1000;

    const comp = AdobeAn.getComposition('D6575376D0EE4849A8F334E37A31AAF3');
    const lib = comp.getLibrary();

    const stage = new lib.Stage(canvas);
    stagesRef.current[index] = stage;

    const exportRoot = new lib.blood_drop();
    stage.addChild(exportRoot);

    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener('tick', stage);

    // Make responsive
    makeResponsive(stage, canvas, animContainer, overlayContainer);
    window.addEventListener('resize', () => {
      makeResponsive(stage, canvas, animContainer, overlayContainer);
    });
  };

  const makeResponsive = (stage, canvas, animContainer, overlayContainer) => {
    const { AdobeAn } = window;
    const comp = AdobeAn.getComposition('D6575376D0EE4849A8F334E37A31AAF3');
    const lib = comp.getLibrary();

    const w = lib.properties.width;
    const h = lib.properties.height;
    const containerWidth = animContainer.clientWidth;
    const containerHeight = containerWidth; // Keep aspect ratio 1:1

    const pRatio = window.devicePixelRatio || 1;
    const sRatio = containerWidth / w;

    canvas.width = w * pRatio * sRatio;
    canvas.height = h * pRatio * sRatio;

    canvas.style.width = overlayContainer.style.width = `${containerWidth}px`;
    canvas.style.height = overlayContainer.style.height = `${containerWidth}px`;

    stage.scaleX = pRatio * sRatio;
    stage.scaleY = pRatio * sRatio;

    stage.update();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Blood Drop Animations</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {animations.map((anim, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                {anim.label}
              </h2>
              <div
                ref={animContainerRefs[index]}
                className="relative w-full aspect-square"
                style={{ backgroundColor: 'rgba(255, 255, 255, 1.00)' }}
              >
                <canvas
                  ref={canvasRefs[index]}
                  className="absolute inset-0 w-full h-full"
                />
                <div
                  ref={overlayContainerRefs[index]}
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Script
        src="https://code.createjs.com/1.0.0/createjs.min.js"
        strategy="beforeInteractive"
      />
      {animations.map((anim, index) => (
        <Script
          key={index}
          src={anim.jsFile}
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window.AdobeAn !== 'undefined') {
              initSingleAnimation(
                canvasRefs[index].current,
                animContainerRefs[index].current,
                overlayContainerRefs[index].current,
                index
              );
            }
          }}
        />
      ))}
    </div>
  );
}