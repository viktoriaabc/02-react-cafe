import type { Votes, VoteType } from "../../types/votes";
import css from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: ;
  positiveVotes: 0;
}

export default function VoteStats(votes, totalVotes, positiveRate):VoteStatsProps {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.stat}>
          Good: <strong>0</strong>
        </p>
        <p className={styles.stat}>
          Neutral: <strong>0</strong>
        </p>
        <p className={styles.stat}>
          Bad: <strong>0</strong>
        </p>
        <p className={styles.stat}>
          Total: <strong>0</strong>
        </p>
        <p className={styles.stat}>
          Positive: <strong>0%</strong>
        </p>
      </div>
    </>
  );
}
