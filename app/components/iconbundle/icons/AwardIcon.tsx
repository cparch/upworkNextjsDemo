// components/MyIcon.js

const AwardIcon = ({...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={props.currentColor} stroke-linecap="round" stroke-linejoin="round" width={props.width} height={props.height} stroke-width={props.strokeWidth}>
    <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path>
    <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path>
    <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path>
  </svg>
);

export default AwardIcon;



