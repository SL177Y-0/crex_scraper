import { useEffect, useState, useRef } from "react";
import { Socket, io } from "socket.io-client";

interface LiveScoreProps {
  readonly matchId: string | string[];
}

export default function LiveScore({ matchId }: LiveScoreProps) {
  const [score, setScore] = useState<string>("Loading...");
  // Use a ref to store the socket instance with proper type
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Establish the connection
    socketRef.current = io("http://localhost:8000");
    socketRef.current.emit("join", matchId);
    
    // Listen for score updates
    socketRef.current.on("score-update", (data: string) => {
      setScore(data);
    });
    
    // Cleanup on unmount
    return () => {
      socketRef.current?.disconnect();
    };
  }, [matchId]);

  return (
    <div className="p-4 bg-green-600 rounded-lg">
      <p className="text-lg">Live Score: {score}</p>
    </div>
  );
}
