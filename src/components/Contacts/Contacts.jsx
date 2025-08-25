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
            <strong>Телефон:</strong> <a href="tel:+998781130512">+998 78 113 05 12</a>
          </div>
          <div>
            <strong>Telegram:</strong> <a href="https://t.me/itacademyuz" target="_blank" rel="noopener">@itacademyuz</a>
          </div>
        </div>
      </div>
    </section>
  );
}
