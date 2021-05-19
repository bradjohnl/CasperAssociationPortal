const Hamburger = ({ width, height, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 35 23"
  >
    <g
      id="Group_1031"
      data-name="Group 1031"
      transform="translate(-1650.418 -35)"
    >
      <line
        id="Line_1"
        data-name="Line 1"
        x1="35"
        transform="translate(1650.418 56.5)"
        fill="none"
        stroke={stroke}
        strokeWidth="3"
      />
      <line
        id="Line_2"
        data-name="Line 2"
        x1="25.918"
        transform="translate(1659.5 46.5)"
        fill="none"
        stroke={stroke}
        strokeWidth="3"
      />
      <line
        id="Line_3"
        data-name="Line 3"
        x1="35"
        transform="translate(1650.418 36.5)"
        fill="none"
        stroke={stroke}
        strokeWidth="3"
      />
    </g>
  </svg>
);

export default Hamburger;
