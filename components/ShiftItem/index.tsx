import clsx from 'clsx';

type TShiftItem = {
  type: 'morning' | 'evening' | 'custom';
};
const ShiftItem = ({ type }: TShiftItem) => {
  return (
    <div
      className={clsx(
        'flex h-1/2 w-full items-center justify-between rounded-full px-2 text-xs',
        type === 'morning'
          ? 'bg-green-100'
          : type === 'evening'
            ? 'bg-orange-100'
            : 'bg-sky-100',
      )}
    >
      <span className="font-bold">
        {type === 'morning'
          ? '🟢 Moring'
          : type === 'evening'
            ? '🟠 Evening'
            : '🔵 Custom'}
      </span>
      <span>
        {type === 'morning'
          ? '8H - 15H30'
          : type === 'evening'
            ? '15H - 23H'
            : '??H - ??H'}
      </span>
    </div>
  );
};

export default ShiftItem;
