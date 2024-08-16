// components/DatePicker.tsx

import { useState } from 'react';
import dayjs from 'dayjs';

interface DatePickerProps {
  onChange?: (date: dayjs.Dayjs | null) => void;
  initialDate?: dayjs.Dayjs;
  format?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  initialDate,
  format = 'YYYY-MM-DD',
}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate || dayjs());

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = dayjs(e.target.value);
    setSelectedDate(newDate);
    onChange?.(newDate);
  };

  return (
    <div className="relative">
      <input
        type="date"
        className="rounded-md border border-gray-300 p-2"
        value={selectedDate.format(format)}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
