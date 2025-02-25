import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LiveScore from "../../components/LiveScore";

interface MatchData {
  title: string;
  // Add other fields as needed (e.g., squads, scorecard details, etc.)
}

export default function MatchDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [matchData, setMatchData] = useState<MatchData | null>(null);
  const [activeTab, setActiveTab] = useState("matchInfo");

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/matches/${id}`)
        .then((res) => setMatchData(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  if (!matchData) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl mb-4">{matchData.title}</h1>
      <div className="mb-4">
        <button 
          onClick={() => setActiveTab("matchInfo")} 
          className={`px-4 py-2 mr-2 ${activeTab === "matchInfo" ? "bg-blue-600" : "bg-gray-700"}`}
        >
          Match Info
        </button>
        <button 
          onClick={() => setActiveTab("squads")} 
          className={`px-4 py-2 mr-2 ${activeTab === "squads" ? "bg-blue-600" : "bg-gray-700"}`}
        >
          Squads
        </button>
        <button 
          onClick={() => setActiveTab("live")} 
          className={`px-4 py-2 mr-2 ${activeTab === "live" ? "bg-blue-600" : "bg-gray-700"}`}
        >
          Live
        </button>
        <button 
          onClick={() => setActiveTab("scorecard")} 
          className={`px-4 py-2 ${activeTab === "scorecard" ? "bg-blue-600" : "bg-gray-700"}`}
        >
          Scorecard
        </button>
      </div>
      <div>
        {activeTab === "matchInfo" && <div>Match information goes here.</div>}
        {activeTab === "squads" && <div>Squads details go here.</div>}
        {activeTab === "live" && id && <LiveScore matchId={id} />}
        {activeTab === "scorecard" && <div>Scorecard details go here.</div>}
      </div>
    </div>
  );
}
