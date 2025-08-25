import styles from './Speaker.module.scss';

export default function Speaker() {
  return (
    <section className={styles.speaker}>
      <h2>Спикер</h2>
      <p className={styles.name}>[Имя Фамилия]</p>
      <blockquote>«…»</blockquote>
    </section>
  );
}
