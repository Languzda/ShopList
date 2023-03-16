import styles from "./Item.module.scss";

const Item: React.FC<{ text: string; value: number; onDelete: () => void }> = (
  props
) => {
  const onDeleteHandler = () => {
    props.onDelete();
  };

  return (
    <div className={styles.item}>
      <span>{`${props.text} : ${props.value}`}</span>

      <button onClick={onDeleteHandler}>{"\u2713"}</button>
    </div>
  );
};

export default Item;
