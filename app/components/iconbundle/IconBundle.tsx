import styles from "./iconBundle.module.css";
import LadderIcon from "./icons/LadderIcon";
import AwardIcon from "./icons/AwardIcon";
import CommentIcon from "./icons/CommentIcon";

export default function BundleIcon() {

  // Can we convert this to css rules?
  const ladderIconProps = {
    currentColor: "black",
    strokeWidth: ".1vw",
    width: '3.5vw',
    height: '3.5vw'
  }

  const icons = [
    {
      component: LadderIcon,
      headerCopy: 'Gravida nec quam eget',
      copy: 'Nullam porttitor orci sed pharetra dictum. Sed tincidunt dictum quam, quis euismod ex convallis quis. Aenean porta tristique lectus. Phasellus ullamcorper tortor fermentum ipsum egestas viverra.'
    },
    {
      component: AwardIcon,
      headerCopy: 'Ut quis ultricies purus',
      copy: 'parturient montes, nascetur ridiculus mus. Quisque fermentum, sapien non rhoncus imperdiet, ipsum ligula ultrices nunc, non semper elit ipsum et felis. Ut efficitur nisl vel velit eleifend egestas.'
    },
    {
      component: CommentIcon,
      headerCopy: 'Eros diam, pharetra at est',
      copy: 'parturient montes, nascetur ridiculus mus. Quisque fermentum, sapien non rhoncus imperdiet, ipsum ligula ultrices nunc, non semper elit ipsum et felis.'
    }
  ];

  const iconBundles = icons.map((icon,) => {
    return (
      <div className={styles.itemContainer} key={icon.headerCopy}>
        <icon.component {...ladderIconProps}/>
        <h1 className={styles.header}>{icon.headerCopy}</h1>
        <p>{icon.copy}</p>
      </div>
    
  )
  })

  return (
    <div className={styles.container}>
      {iconBundles}
    </div>
  );
}




