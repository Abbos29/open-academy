import styles from './What.module.scss';

export default function What() {
  return (
    <section className={`section ${styles.what}`}>
      <div className="container">
        <div className="twocol">
          {/* ...visual удалён, только контент ... */}
          <div>
            <h2>Что будет?</h2>
            <ul>
              <li>Практическая лекция</li>
              <li>Живые уроки студентов</li>
              <li>Разбор реальных проектов</li>
              <li>Розыгрыш бесплатных мест</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
