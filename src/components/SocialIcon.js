export default function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 grid place-items-center rounded-full border border-gray-200 hover:bg-accent hover:text-white transition"
    >
      {icon}
    </a>
  );
}
