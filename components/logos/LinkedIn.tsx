type PropType = {
  style: string;
};

const LinkedIn = (props: PropType) => {
  const { style } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="512"
      height="512"
      viewBox="0, 0, 512, 512"
      className={style}
    >
      <g>
        <path d="M114.606,512 L8.457,512 L8.457,170.164 L114.606,170.164 z M61.474,123.534 C27.531,123.534 0,95.419 0,61.476 C0,27.524 27.523,0 61.474,0 C95.426,0 122.949,27.524 122.949,61.476 C122.949,95.419 95.406,123.534 61.474,123.534 z M511.886,512 L405.966,512 L405.966,345.596 C405.966,305.938 405.166,255.08 350.777,255.08 C295.589,255.08 287.131,298.167 287.131,342.739 L287.131,512 L181.097,512 L181.097,170.164 L282.903,170.164 L282.903,216.793 L284.389,216.793 C298.56,189.936 333.177,161.592 384.823,161.592 C492.251,161.592 512,232.337 512,324.224 L512,512 z" />
      </g>
    </svg>
  );
};

export default LinkedIn;