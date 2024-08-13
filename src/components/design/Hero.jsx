import { MouseParallax } from "react-just-parallax";
import {
  emoteemo, emotetatu, emotejinx,
  emotezed, emotecogumelo, emoteriot,
  emoteleesin, emotecaitlyn
} from "../../assets";
import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="relative absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
          {/* Emote 1 */}
          <div className="absolute" style={{ top: '40rem', left: '1rem' }}>
            <img
              src={emoteemo}
              alt="Background Image 1"
              className="w-20 h-20 object-cover rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Emote 2 */}
          <div className="absolute" style={{ top: '59rem', left: '30rem' }}>
            <img
              src={emotetatu}
              alt="Background Image 2"
              className="w-20 h-20 object-cover rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Emote 3 */}
          <div className="absolute" style={{ top: '30rem', left: '50rem' }}>
            <img
              src={emotejinx}
              alt="Background Image 3"
              className="w-20 h-20 object-cover rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Emote 4 */}
          <div className="absolute" style={{ top: '57rem', left: '72rem' }}>
            <img
              src={emotecogumelo}
              alt="Background Image 4"
              className="w-20 h-20 object-cover rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Emote 5 */}
          <div className="absolute" style={{ top: '57rem', left: '1rem' }}>
            <img
              src={emotezed}
              alt="Background Image 5"
              className="w-20 h-20 object-cover rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Emote 6 */}
          <div className="absolute" style={{ top: '31rem', left: '22rem' }}>
            <img
              src={emoteriot}
              alt="Background Image 5"
              className="w-20 h-20 object-cover rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Emote 7 */}
          <div className="absolute" style={{ top: '45rem', left: '35rem' }}>
            <img
              src={emoteleesin}
              alt="Background Image 5"
              className="w-20 h-20 object-cover rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Emote 8 */}
          <div className="absolute" style={{ top: '40rem', left: '71rem' }}>
            <img
              src={emotecaitlyn}
              alt="Background Image 5"
              className="w-20 h-20 object-cover rounded-full"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </MouseParallax>
    </div>
  );
};
