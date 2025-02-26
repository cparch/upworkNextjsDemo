// components/MyIcon.js

const LadderIcon = ({...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={props.currentColor} stroke-linecap="round" stroke-linejoin="round" width={props.width} height={props.height} stroke-width={props.strokeWidth}>
    <path d="M4 15l11 -11m5 5l-11 11m-4 -8l7 7m-3.5 -10.5l7 7m-3.5 -10.5l7 7"></path>
  </svg>
);

export default LadderIcon;
