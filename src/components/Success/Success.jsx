import styles from './Success.module.scss';

export default function Success() {
  return (
    <section className={styles.success}>
      <h2>Спасибо! Ваша заявка принята</h2>
      <p>Мы свяжемся с вами для подтверждения.</p>
    </section>
  );
}
