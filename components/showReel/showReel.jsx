import styles from './showReel.module.css';

export default function Showreel() {
  const text = " showreel showreel showreel";
  const radius = 60;
  const textArray = text.split(''); 
  const angleStep = 360 / textArray.length;

  return (
    <div className={styles.showreelСontainer}>
      <div className={styles.showreel}>
        {textArray.map((char, index) => {
          const angle = index * angleStep;
          return (
            <span
              key={index}
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            >
              {char}
            </span>
          );
        })}
        <div className={styles.centerDot}></div>
      </div>
    </div>
  );
}
