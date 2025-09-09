export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="card p-6 text-center hover:shadow-lg transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
