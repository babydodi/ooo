export default function HowItem({ step, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="w-12 h-12 rounded-full bg-accent text-white grid place-items-center font-bold">
        {step}
      </div>
      <h4 className="font-heading text-base font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
