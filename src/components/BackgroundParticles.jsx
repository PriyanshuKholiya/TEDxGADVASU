// filepath: c:\Users\Preeti\OneDrive\Desktop\TEDxGADVASU\TEDXGADVASU\src\ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ff0000",
          },
          links: {
            color: "#ff0000",
            distance: 200,
            enable: true,
            opacity: 0.8,
            width: 2.5, // thicker lines
          },
          move: {
            direction: "bottom",
            enable: true,
            speed: 2.5,
            straight: false,
            angle: {
              value: 20,
              offset: 0,
            },
            random: true,
            outModes: {
              default: "out",
            },
          },
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
          },
          rotate: {
            value: 0,
            random: {
              enable: true,
              minimumValue: 0,
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 10,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}