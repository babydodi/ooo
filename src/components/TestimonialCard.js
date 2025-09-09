export default function TestimonialCard({ name, city, quote }) {
  return (
    <div className="card p-6 text-center">
      <div className="flex justify-center mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
      </div>
      <p className="italic mb-3">"{quote}"</p>
      <div className="text-yellow-400 mb-2">★★★★★</div>
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-gray-500">{city}</p>
    </div>
  );
}
