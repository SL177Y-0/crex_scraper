import { useEffect, useState } from "react";
import axios from "axios";
import MatchCard from "../components/MatchCard";

interface Match {
  id: string;
  title: string;
  time: string;
}

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/scrape")
      .then((res) => setMatches(res.data.matches))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl text-white mb-4">Cricket Live Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
