import styles from "./Suggestion.module.css";

export const Suggestion = (props) => {
  const { suggestion } = styles;
  return (
    <div className={suggestion}>
      <h5> Buenos Aires </h5>
      <h6>Argentina</h6>
    </div>
  );
};
