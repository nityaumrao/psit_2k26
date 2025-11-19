// "use client";
// import { useEffect, useRef } from "react";
// import anime from "animejs";

// export default function HeroAnimation() {
//   const boxRef = useRef(null);

//   useEffect(() => {
//     anime({
//       targets: boxRef.current,
//       translateY: [-20, 20],
//       direction: "alternate",
//       loop: true,
//       easing: "easeInOutSine",
//     });
//   }, []);

//   return (
//     <div
//       ref={boxRef}
//       className="w-32 h-32 bg-yellow-500 rounded-xl"
//     ></div>
//   );
// }
