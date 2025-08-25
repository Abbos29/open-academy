import styles from './Why.module.scss';

export default function Why() {
  return (
    <section className={`section ${styles.why}`}>
      <div className="container">
        <div className="twocol">
          <div>
            <h2>Почему стоит прийти?</h2>
            <ul>
              <li>Портфолио, которое замечают работодатели</li>
              <li>Настоящие уроки и реальные проекты</li>
              <li>Шанс выиграть бесплатное место</li>
              <li>Короткая консультация на месте</li>
            </ul>
          </div>
          {/* ...visual удалён, только контент ... */}
        </div>
      </div>
    </section>
  );
}
