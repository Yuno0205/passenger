import clsx from 'clsx';
// import { motion } from 'framer-motion';

interface ShiftItemProps {
  type: 'morning' | 'evening' | 'custom';
  customTime?: string;
  onDoubleClick: () => void;
}

const ShiftItem = ({ type, customTime, onDoubleClick }: ShiftItemProps) => {
  return (
    <div
      className={clsx(
        'flex h-full w-full cursor-pointer items-center justify-between rounded-full px-2 text-xs',
        type === 'morning'
          ? 'bg-green-100'
          : type === 'evening'
          ? 'bg-orange-100'
          : 'bg-sky-100',
      )}
      onDoubleClick={onDoubleClick}
    >
      <span className="font-bold">
        {type === 'morning'
          ? '🟢 Morning'
          : type === 'evening'
          ? '🟠 Evening'
          : '🔵 Custom'}
      </span>
      <span>
        {type === 'morning'
          ? '9H - 15H30'
          : type === 'evening'
          ? '15H - 23H'
          : `${customTime?.replace(/:00/g, 'H')}`}
      </span>
    </div>
  );
};

export default ShiftItem;
