import { useState, useRef, useEffect } from 'react';
import styles from './RegistrationForm.module.scss';

export default function RegistrationForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
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
    let digits = val.replace(/\D/g, '');
    if (digits.startsWith('998')) digits = digits.slice(3);
    let res = '+998 ';
    if (digits.length > 0) res += digits.slice(0, 2);
    if (digits.length > 2) res += ' ' + digits.slice(2, 5);
    if (digits.length > 5) res += ' ' + digits.slice(5, 7);
    if (digits.length > 7) res += ' ' + digits.slice(7, 9);
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

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.phone || !form.agree) {
      setError('Укажите телефон и согласие.');
      return;
    }
    setError('');

    const digits = form.phone.replace(/\D/g, '');
    const plainPhone = '+998' + digits.replace(/^998/, '');

    // Сообщение для Telegram
    const text = `📝 Новая заявка на Open Day IT Academy\n\n👤 Имя: ${form.name}\n📞 Телефон: ${plainPhone}`;
    const token = '7203935667:AAEYXswgxG9necw7L4OYPOTctQ2xiMT0TU4';
    const chatId = '-1002594242525';

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      });
      if (onSuccess) onSuccess();
    } catch (err) {
      setError('Ошибка отправки. Попробуйте позже.');
    }
  }

  return (
    <section className={styles.formSection} id="register" ref={formRef}>
      <h2 className={styles.title}>Запишись на день открытых дверей</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Ваше имя"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Телефон (+998 XX XXX XX XX)"
          value={form.phone}
          onChange={handleChange}
          required
          autoComplete="tel"
        />
        <label className={styles.checkboxLabel}>
          <input
            name="agree"
            type="checkbox"
            checked={form.agree}
            onChange={handleChange}
          />
          Я согласен на обработку данных
        </label>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" className={styles.cta}>
          🚀 Отправить заявку
        </button>
      </form>
      <div className={styles.underform}>
        Места ограничены. Номерок для участия в лотерее вы получите лично при регистрации на входе
      </div>
    </section>
  );
}
