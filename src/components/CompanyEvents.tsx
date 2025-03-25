
import { Card } from "@/components/ui/card";
import { Image } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
}

export const CompanyEvents = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Annual Hackathon",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description: "Teams collaborating in our annual 24-hour innovation sprint",
    },
    {
      id: 2,
      title: "Team Building",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "Company retreat focused on team bonding and strategy",
    },
  ];

  return (
    <div className="mb-8 animate-fade-up">
      <h2 className="text-2xl font-semibold mb-4">Company Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden backdrop-blur-sm bg-card">
            <div className="relative h-48">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.date}</p>
              <p className="text-sm text-gray-700">{event.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
