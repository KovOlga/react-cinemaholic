import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { ButtonType, IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({
  type,
  linkTo,
  buttonText,
  onClick,
  disabled,
  width,
}) => {
  return (
    <>
      {type === ButtonType.Link && linkTo ? (
        <Link
          disabled={disabled}
          to={linkTo}
          className={`${style.button} ${style.button__main}`}
        >
          <p className={`${style.inner} ${style.inner__main}`}>{buttonText}</p>
        </Link>
      ) : (
        <button
          type={ButtonType.Button ? "button" : "submit"}
          onClick={onClick}
          className={`${style.button} ${style.button__main}`}
          disabled={disabled}
          style={{ width: width }}
        >
          <p className={`${style.inner} ${style.inner__main}`}>{buttonText}</p>
        </button>
      )}
    </>
  );
};

export default Button;
