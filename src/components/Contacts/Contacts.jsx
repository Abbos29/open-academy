import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <h2>Контакты</h2>
        <div className={styles.info}>
          <div>
            <strong>Адрес:</strong> Ташкент, ул. Шахрисабз 7
          </div>
          <div>
            <strong>Телефон:</strong> <a href="tel:+998900002812">+998 90 000 28 12</a>
          </div>
          <div>
            <strong>Telegram:</strong> <a href="https://t.me/It_academy_manager" target="_blank" rel="noopener">@It_academy_manager</a>
          </div>
        </div>
      </div>
    </section>
  );
}
