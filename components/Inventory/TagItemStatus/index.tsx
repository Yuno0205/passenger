export default function ItemStatus({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex min-w-[120px] items-center justify-center rounded-full px-2 py-1.5 text-center text-xs ${
        status.toLowerCase() === 'out of stock'
          ? 'bg-red-100 text-red-500'
          : status.toLowerCase() === 'low stock'
          ? 'bg-yellow-100 text-amber-500'
          : 'bg-green-100 text-green-600'
      }`}
    >
      {status.toLowerCase() === 'out of stock' && (
        <p className="p-1 font-semibold uppercase">Out of Stock</p>
      )}
      {status.toLowerCase() === 'low stock' && (
        <p className="p-1 font-semibold uppercase">Low Stock</p>
      )}
      {status.toLowerCase() === 'in stock' && (
        <p className="p-1 font-semibold uppercase">In Stock</p>
      )}
    </span>
  );
}
