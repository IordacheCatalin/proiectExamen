import styles from "./button.module.scss";

function Button({children,onClick}) {


  return (
    <button type="submit" className={styles.button}><span>{children}</span>  
    </button>
  );
}

export default Button;
