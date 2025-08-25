import styles from './Hero.module.scss';

export default function Hero({ onRegister }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>День открытых дверей IT Academy</h1>
        <p className={styles.subtitle}>14 сентября, 11:00 · Ташкент, ул. Шахрисабз 7</p>
        <p className={styles.desc}>45 минут практики, живые уроки, розыгрыш 3 бесплатных мест. Зарегистрируйтесь — мы перезвоним для подтверждения.</p>
        <button className={styles.cta} onClick={onRegister}>
          🚀 Записаться на курс
        </button>
      </div>
    </section>
  );
}
