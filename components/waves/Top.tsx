export type TopType = {
  colour: string;
};

const Top = (props: TopType) => {
  const { colour } = props;
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-[120px] w-full"
      >
        <path
          d="M1200,0 L1200,46.295 C1152.21,68.497 1096.41,78.468 1042,74.297 C971.64,68.927 905.67,40.984 835.2,36.794 C761.36,32.433 687.66,53.675 617,72.057 C547.73,90.059 478.7,96.94 407.6,85.138 C371.45,79.138 337.75,67.297 303.15,55.795 C210.51,25.002 87,-14.291 0,52.475 L0,0 z"
          className={colour}
          opacity="0.25"
        />
        <path
          d="M1200,0 L1200,15.812 C1187,36.924 1172.36,56.866 1152.31,72.057 C1100.59,111.281 1035,111.011 975.42,91.589 C944.27,81.438 915.33,65.516 885.75,51.785 C844.83,32.783 801.02,5.781 754.92,2.11 C718.66,-0.74 684.02,11.531 656.32,33.673 C624.55,59.066 594,95.679 552.69,106.68 C512.25,117.472 471.34,99.99 433.56,82.398 C395.78,64.806 358.4,43.394 316.64,39.344 C256.91,33.493 203.36,62.226 147.74,78.188 C117.54,86.849 88.74,84.358 60.65,70.687 C38.22,59.796 12.65,43.754 0,21.442 L0,0 z"
          className={colour}
          opacity="0.5"
        />
        <path
          d="M1200,0 L1200,5.631 C1050.07,59.006 885.91,71.327 724.17,42.574 C681.17,34.933 639.94,22.452 596.56,16.112 C537.56,7.481 484.08,28.353 431,51.515 C372.07,77.228 314,95.249 248.8,90.009 C162.27,83.008 76.34,44.294 0,5.191 L0,0 z"
          className={colour}
        />
      </svg>
    </div>
  );
};

export default Top;
