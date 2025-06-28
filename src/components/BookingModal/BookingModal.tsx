'use client';

import { useState } from 'react';
import classes from './BookingModal.module.scss';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredContact: '',
    tourDate: '',
    numberOfGuests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Форматируем дату для удобного отображения
    const formattedDate = formData.tourDate
      ? new Date(formData.tourDate).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';

    // Выводим данные в консоль в структурированном виде
    console.group('Данные бронирования:');
    console.log('👤 Имя:', formData.name || 'Не указано');
    console.log('📞 Телефон:', formData.phone || 'Не указано');
    console.log('📧 Email:', formData.email || 'Не указано');
    console.log(
      '✉️ Предпочтительный способ связи:',
      formData.preferredContact || 'Не указано'
    );
    console.log('📅 Дата тура:', formattedDate || 'Не указана');
    console.log('👥 Количество гостей:', formData.numberOfGuests || 'Не указано');
    console.log('💬 Сообщение:', formData.message || 'Нет сообщения');
    console.groupEnd();

    console.log('Данные для отправки на сервер:', JSON.stringify(formData, null, 2));

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <button className={classes.closeButton} onClick={onClose}>
          ×
        </button>

        <h2 className={classes.title}>Get in touch with us</h2>

        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            type='text'
            placeholder='Name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={classes.input}
          />

          <input
            type='tel'
            placeholder='Phone'
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={classes.input}
          />

          <input
            type='email'
            placeholder='E-mail'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={classes.input}
          />

          <select
            value={formData.preferredContact}
            onChange={(e) =>
              setFormData({ ...formData, preferredContact: e.target.value })
            }
            className={classes.select}
          >
            <option value=''>Preffered way of contact</option>
            <option value='phone'>Phone</option>
            <option value='email'>Email</option>
            <option value='whatsapp'>WhatsApp</option>
          </select>

          <div className={classes.row}>
            <input
              type='date'
              value={formData.tourDate}
              onChange={(e) =>
                setFormData({ ...formData, tourDate: e.target.value })
              }
              className={classes.input}
            />

            <input
              type='number'
              placeholder='Number of Guests'
              value={formData.numberOfGuests}
              onChange={(e) =>
                setFormData({ ...formData, numberOfGuests: e.target.value })
              }
              className={classes.input}
              min='1'
            />
          </div>

          <textarea
            placeholder='Leave a message about your trip.'
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={classes.textarea}
            rows={4}
          />

          <p className={classes.disclaimer}>
            Please read before continuing!
            <br />
            This experience is booked on request. The owner of the experience will
            respond to the request within 2 days.
          </p>

          <button type='submit' className={classes.submitButton}>
            SEND A REQUEST
          </button>
        </form>
      </div>
    </div>
  );
}
