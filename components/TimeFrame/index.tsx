import { XCircleIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import Dropdown from '../Dropdown';

const TimeFrame = ({ id, removeShiftItem }: any) => {
  let hoursArray = [];

  for (let hour = 8; hour <= 23; hour++) {
    let time = dayjs().hour(hour).minute(0).second(0);
    let formattedTime = time.format('hh:mm A');
    hoursArray.push(formattedTime);
  }

  return (
    <div className="mx-2 flex items-center justify-evenly gap-4 rounded-xl bg-gray-50 px-2 py-4">
      <Dropdown onSelect={() => {}} options={hoursArray} />
      <p>To</p>
      <Dropdown onSelect={() => {}} options={hoursArray} />
      <div
        className="cursor-pointer hover:text-red-500"
        onClick={() => removeShiftItem(id)}
      >
        <XCircleIcon width={20} />
      </div>
    </div>
  );
};

export default TimeFrame;
