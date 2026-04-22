import { useState } from 'react';
import {
  Text,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Modal,
  Toast,
  Spinner,
} from '@sci-event/ui';
import '@sci-event/ui/tokens/colors.css';

const selectOptions = [
  { value: 'conf', label: 'Конференция' },
  { value: 'seminar', label: 'Семинар' },
  { value: 'workshop', label: 'Воркшоп' },
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('online');

  return (
    <div style={{ padding: '40px', maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <section>
        <Text as="h1" size="xxxl" weight="bold">sci-event B2C</Text>
        <Text color="muted">Тестовая страница компонентов @sci-event/ui</Text>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text as="h2" size="xl" weight="semibold">Text</Text>
        <Text size="xs" color="subtle">Размер xs, цвет subtle</Text>
        <Text size="sm" color="muted">Размер sm, цвет muted</Text>
        <Text size="md">Размер md (дефолт)</Text>
        <Text size="lg" weight="medium">Размер lg, medium</Text>
        <Text size="xl" weight="semibold" color="primary">Размер xl, primary</Text>
        <Text size="xxl" weight="bold" color="success">Размер xxl, success</Text>
        <Text size="xxxl" weight="bold" color="error">Размер xxxl, error</Text>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text as="h2" size="xl" weight="semibold">Button</Text>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" size="sm">Primary sm</Button>
          <Button variant="primary" size="md">Primary md</Button>
          <Button variant="primary" size="lg">Primary lg</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Text as="h2" size="xl" weight="semibold">Input</Text>
        <Input label="Название события" placeholder="Введите название" size="sm" />
        <Input label="Email" type="email" placeholder="name@example.com" size="md" hint="Мы не передадим ваш email третьим лицам" />
        <Input label="Сайт" placeholder="https://" size="lg" error="Некорректный URL" />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text as="h2" size="xl" weight="semibold">Checkbox</Text>
        <Checkbox
          label="Принимаю условия обработки персональных данных"
          checked={checkboxChecked}
          onChange={(e) => setCheckboxChecked(e.target.checked)}
        />
        <Checkbox label="С ошибкой" error="Обязательно для заполнения" />
        <Checkbox label="Отключен" disabled />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text as="h2" size="xl" weight="semibold">Radio</Text>
        <Radio
          label="Онлайн"
          name="format"
          value="online"
          checked={radioValue === 'online'}
          onChange={() => setRadioValue('online')}
        />
        <Radio
          label="Офлайн"
          name="format"
          value="offline"
          checked={radioValue === 'offline'}
          onChange={() => setRadioValue('offline')}
        />
        <Radio label="Гибрид (недоступно)" name="format" value="hybrid" disabled />
        <Text size="sm" color="muted">Выбрано: {radioValue}</Text>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Text as="h2" size="xl" weight="semibold">Select</Text>
        <Select label="Тип события" options={selectOptions} placeholder="Выберите тип" size="sm" />
        <Select label="Тип события (md)" options={selectOptions} defaultValue="conf" size="md" />
        <Select label="С ошибкой" options={selectOptions} error="Обязательное поле" size="lg" />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text as="h2" size="xl" weight="semibold">Toast</Text>
        <Toast variant="info" title="Информация">Событие создано и ожидает модерации</Toast>
        <Toast variant="success" title="Готово">Регистрация прошла успешно</Toast>
        <Toast variant="warning" title="Внимание">До окончания регистрации осталось 2 часа</Toast>
        <Toast variant="error" title="Ошибка" onClose={() => {}}>Не удалось сохранить изменения</Toast>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text as="h2" size="xl" weight="semibold">Spinner</Text>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Spinner size="sm" label="Загрузка sm" />
          <Spinner size="md" label="Загрузка md" />
          <Spinner size="lg" label="Загрузка lg" />
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text as="h2" size="xl" weight="semibold">Modal</Text>
        <Button onClick={() => setModalOpen(true)}>Открыть модал</Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Подтверждение регистрации">
          <Text>Вы уверены, что хотите зарегистрироваться на это событие?</Text>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <Button variant="primary" onClick={() => setModalOpen(false)}>Подтвердить</Button>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Отмена</Button>
          </div>
        </Modal>
      </section>
    </div>
  );
}
