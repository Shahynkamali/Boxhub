import type { FC } from "react";
import { ImgHTMLAttributes, useState } from "react";
import styles from "./Image.module.scss";
interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallback: string;
}

const Image: FC<Props> = ({ fallback, src, ...rest }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);

  const onError = () => setImgSrc(fallback);

  return (
    <img
      className={styles.root}
      src={imgSrc ?? fallback}
      onError={onError}
      {...rest}
    />
  );
};

export { Image };
