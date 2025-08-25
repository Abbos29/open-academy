import styles from './Program.module.scss';

export default function Program() {
  return (
    <section className={`section ${styles.program}`}>
      <div className="container">
        <div className="twocol">
          <div>
            <h2>Программа дня</h2>
            <ul>
              <li>10:30 — Регистрация</li>
              <li>11:00 — Лекция</li>
              <li>12:00 — Живые уроки</li>
              <li>13:00 — Консультации и кофе</li>
              <li>15:00 — Розыгрыш</li>
            </ul>
          </div>
          {/* ...visual удалён, только контент ... */}
        </div>
      </div>
    </section>
  );
}
