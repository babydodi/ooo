export default function DecorativeWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#EEF5FF"
          fillOpacity="1"
          d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,112C840,107,960,117,1080,117.3C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
