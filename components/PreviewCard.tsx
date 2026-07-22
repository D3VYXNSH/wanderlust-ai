type PreviewCardProps = {
  city: string;
  country: string;
  day: string;
  activities: string[];
  budget: string;
  badge: string;
  className?: string;
};

export default function PreviewCard({
  city,
  country,
  day,
  activities,
  budget,
  badge,
  className = "",
}: PreviewCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl transition-all duration-700 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
          ✨ AI Generated
        </span>

        <span className="text-sm text-gray-500">{day}</span>
      </div>

      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        {city} {country}
      </h2>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-md">
        <div className="space-y-3">
          {activities.map((activity) => (
            <p
              key={activity}
              className="flex items-center gap-2 text-gray-700"
            >
              {activity}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">

        <div className="rounded-full bg-purple-100 px-4 py-2 font-medium text-purple-700">
          💰 {budget}
        </div>

        <div className="rounded-full bg-yellow-100 px-4 py-2 font-medium text-yellow-700">
          ⭐ {badge}
        </div>

      </div>
    </div>
  );
}