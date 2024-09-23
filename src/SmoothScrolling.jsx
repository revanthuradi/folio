import { ReactLenis } from "@studio-freight/react-lenis";
function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 0.07,
    duration: 2,
    smoothTouch: true,
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
