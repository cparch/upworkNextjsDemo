import styles from './copy.module.css'

export default function Copy() {

  const copyData = [
    {
      header: "Vestibulum at nibh at",
      subHeader: "Pellentesque eu lobortis risus. Curabitur ac dui diam. Aliquam mattis massa at porttitor ultricies. Mauris accumsan neque ac sem pretium, a luctus arcu ornare. In id lacus nulla."
    },
    {
      header: "Nulla aliquam interdum",
      subHeader: "Curabitur vel tortor gravida lectus venenatis scelerisque. Curabitur suscipit elementum lectus, et sagittis neque rhoncus sit amet. Nulla aliquam interdum felis, at facilisis sem suscipit eu. Phasellus est lectus,"
    },
    {
      header: "Nulla tellus libero",
      subHeader: "Pellentesque vel nisl ligula. Duis nibh risus, ullamcorper at arcu eu, ornare lacinia est. Suspendisse sem ex, elementum vel consectetur ac, imperdiet at nisl. Nam aliquet at neque id ullamcorper."
    }
  ]

  const copyItems = copyData.map((item, index) => {
    return (
      <div className={styles.copyContainer} key={index}>
        <h1>{item.header}</h1>
        <p>{item.subHeader}</p>
      </div>
    )
  })

  return (
    <div className={styles.mainContainer}>
      {copyItems}
    </div>
  );

}
