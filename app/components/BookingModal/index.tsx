'use client';

import { FC, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './styles.module.scss';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle: string;
  tourPrice: string;
  tourDuration: string;
}

const BookingModal: FC<BookingModalProps> = ({
  isOpen,
  onClose,
  tourTitle,
  tourPrice,
  tourDuration
}) => {
  const { translations: t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    participants: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        
        <h2 className={styles.title}>{t.booking.title}</h2>
        <div className={styles.tourInfo}>
          <h3>{tourTitle}</h3>
          <p>{t.common.duration}: {tourDuration}</p>
          <p>{t.common.price}: {tourPrice}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">{t.booking.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">{t.booking.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">{t.booking.phone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">{t.booking.date}</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="participants">{t.booking.participants}</label>
            <select
              id="participants"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            {t.booking.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal; 