import { useCallback } from "react";
import styles from "./index.module.scss";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
const Footer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  return (
    <footer>
      <section
        className={`${styles.fixed_bg} ${styles.footer} relative bg-orange-300 w-full text-white`}
      >
        <div className="absolute w-full h-full top-0 left-0 opacity-80 bg-black">
          <Particles
            className="w-full h-full absolute"
            id="tsparticles"
            init={particlesInit}
            // loaded={particlesLoaded}
            options={{
              fullScreen: {
                enable: false,
                zIndex: -1,
              },

              fpsLimit: 120,

              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "top-right",
                  enable: true,
                  random: true,
                  speed: 10,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap lg:flex-row gap-10 xl:gap-16 absolute w-full h-full px-8 xl:px-24 py-8">
          <div className="text-sm">
            <p className="font-bold text-lg mb-4">CONNECT WITH TUCST</p>
            <p>Address: No. 561 Quang Trung 3, Dong Ve Ward, City. Thanh Hoa</p>
            <p>
              Phone: +(84) 2373. 953 388 <br /> +(84) 2373. 857 421
            </p>
            <p>Website: http://www.dvtdt.edu.vn</p>
            <div className="mt-7">
              <iframe
                src="https://maps.google.com/maps?q=Thanh%20Hoa%20University%20of%20Culture&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <div className="block">
            <p className="font-bold text-lg">Social Media </p>
            <div className="mt-4">
              <a
                className="underline"
                href="https://www.facebook.com/profile.php?id=100064751773340"
                target="_blank"
              >
                Thanh Hoa University of Culture, Sports and Tourism Youth Union
                fanpage
              </a>
            </div>
            <div className="mt-4">
              <a
                className="underline"
                href="https://www.facebook.com/tuyensinh.dvtdt.edu.vn"
                target="_blank"
              >
                Thanh Hoa University of Culture, Sports and Tourism Admissions
                fanpage
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
