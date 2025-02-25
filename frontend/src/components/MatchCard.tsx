import { motion } from "framer-motion";
import Link from "next/link";

interface MatchProps {
  readonly match: {
    readonly title: string;
    readonly time: string;
  };
}

export default function MatchCard({ match }: MatchProps) {
  return (
    <Link href={`/match/${encodeURIComponent(match.title)}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-4 bg-blue-600 text-white rounded-xl shadow-lg transition cursor-pointer"
      >
        <h2 className="text-xl">{match.title}</h2>
        <p>{match.time}</p>
      </motion.div>
    </Link>
  );
}
