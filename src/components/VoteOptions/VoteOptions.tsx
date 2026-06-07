import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  // onVote: ;
  // onReset: ;
}

export default function VoteOptions(onVote, onReset, canReset: true) {
  
  return (
    <>
      <div className={css.container}>
        <button onClick={onVote} className={css.button}>Good</button>
        <button onClick={onVote} className={css.button}>Neutral</button>
        <button onClick={onVote} className={css.button}>Bad</button>
        <button onClick={onReset && } className={`${css.button} ${css.reset}`}>Reset</button>
      </div>
    </>
  );
}
