
import { useState, useRef, useEffect } from 'react';
import styles from './RegistrationForm.module.scss';

const programs = [
  'Frontend',
  'Design',
  'Backend',
  'UI/UX',
  'Kids',
  'Другое',
];

export default function RegistrationForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    program: '',
    agree: false,
  });
  const [error, setError] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#register' && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  function formatUzPhone(val) {
    // Оставляем только цифры
    let digits = val.replace(/\D/g, '');
    // Формируем маску +998 XX XXX XX XX
    if (digits.startsWith('998')) digits = digits.slice(3);
    let res = '+998 ';
    if (digits.length > 0) res += digits.slice(0,2);
    if (digits.length > 2) res += ' ' + digits.slice(2,5);
    if (digits.length > 5) res += ' ' + digits.slice(5,7);
    if (digits.length > 7) res += ' ' + digits.slice(7,9);
    return res.trim();
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (name === 'phone') {
      setForm(f => ({
        ...f,
        phone: formatUzPhone(value),
      }));
    } else {
      setForm(f => ({
        ...f,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.phone || !form.agree) {
      setError('Укажите телефон и согласие.');
      return;
    }
    setError('');
    if (onSuccess) onSuccess();
  }

  return (
    <section className={styles.formSection} id="register" ref={formRef}>
      <h2 className={styles.title}>Запишитесь на курс</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Ваше имя" value={form.name} onChange={handleChange} autoComplete="name" />
        <input name="phone" type="tel" placeholder="Телефон (+998 XX XXX XX XX)" value={form.phone} onChange={handleChange} required autoComplete="tel" />
        <select name="program" value={form.program} onChange={handleChange}>
          <option value="">Выберите программу</option>
          {programs.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <label className={styles.checkboxLabel}>
          <input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} />
          Я согласен на обработку данных
        </label>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" className={styles.cta}>🚀 Отправить заявку</button>
      </form>
      <div className={styles.underform}>Места ограничены. Номерок для участия в лотерее вы получите лично при регистрации.</div>
    </section>
  );
}
