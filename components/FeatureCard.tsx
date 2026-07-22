type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <div className="group rounded-3xl bg-white/80 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-105">

      <div className="mb-5 text-5xl">{icon}</div>

      <h3 className="mb-3 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}