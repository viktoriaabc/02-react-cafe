import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <>
      <div className={css.container}>
        <button
          onClick={() => onVote("good")}
          className={css.button}
          type="button"
        >
          Good
        </button>
        <button
          onClick={() => onVote("neutral")}
          className={css.button}
          type="button"
        >
          Neutral
        </button>
        <button
          onClick={() => onVote("bad")}
          className={css.button}
          type="button"
        >
          Bad
        </button>
        {canReset && (
          <button
            onClick={onReset}
            className={`${css.button} ${css.reset}`}
            type="reset"
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
}
