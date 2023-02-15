import styles from "./Item.module.css";

const Item: React.FC<{ text: string; value: number; onDelete: () => void }> = (
  props
) => {
  const onDeleteHandler = () => {
    props.onDelete();
  };

  return (
    <div className={styles.item}>
      <span>{`${props.text} : ${props.value}`}</span>

      <button onClick={onDeleteHandler}>Delete</button>
    </div>
  );
};

export default Item;
