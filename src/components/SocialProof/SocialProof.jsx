import { useEffect, useState } from 'react';
import styles from './SocialProof.module.scss';

const reviews = [
  {
    name: 'Алексей',
    role: 'Junior Frontend',
    text: 'После курса я собрал портфолио и через 3 месяца получил первую работу — реальные задания помогли показать результат.',
    emoji: '👨‍💻',
  },
  {
    name: 'Ирина',
    role: 'Мама студента',
    text: 'Мой сын теперь понимает, как строить карьеру — и это видно по его проектам.',
    emoji: '👩‍👦',
  },
  {
    name: 'Давид',
    role: 'UI/UX Designer',
    text: 'Учёба дала мне уверенность и реальные навыки для работы в команде.',
    emoji: '🎨',
  },
];

export default function SocialProof() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(a => (a + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`section ${styles.social}`}>
      <div className="container">
        <h2 className={styles.title}>Отзывы</h2>
        <div className={styles.slider}>
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={
                i === active
                  ? styles.card + ' ' + styles.active
                  : styles.card
              }
              style={{ display: i === active ? 'block' : 'none' }}
            >
              <div className={styles.emoji}>{r.emoji}</div>
              <div className={styles.text}>“{r.text}”</div>
              <div className={styles.meta}>{r.name} · {r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
