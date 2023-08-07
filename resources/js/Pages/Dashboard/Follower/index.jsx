import React, { useState } from "react";
import styles from "./Follower.module.sass";
import cn from "classnames";
import { Link } from '@inertiajs/react';

import { numberWithCommas } from "../../../utils.jsx";

const Follower = ({ className, item, followers }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn(styles.follower, className)}>
      <div className={styles.details}>
        <div className={styles.avatar}>
          <img src={item.avatar} alt="Avatar" />
        </div>
        <div className={styles.wrap}>
          <div className={styles.man}>{item.man}</div>
          <div className={styles.list}>
            <div className={styles.counter}>
              <span>{item.products}</span> products
            </div>
            <div className={styles.counter}>
              <span>{numberWithCommas(item.followers)}</span> followers
            </div>
          </div>
          <div className={styles.btns}>
            {followers ? (
              <button
                className={cn("button-stroke", styles.button, styles.follow, {
                  [styles.active]: visible,
                })}
                onClick={() => setVisible(!visible)}
              >
                Follow<span>ing</span>
              </button>
            ) : (
              <button className={cn("button-stroke", styles.button)}>
                Unfollow
              </button>
            )}

            {item.message && (
              <a
                className={cn("button", styles.button)}
                to="/message-center"
              >
                Message
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.gallery}>
        {item.gallery.map((x, index) => (
          <div className={styles.preview} key={index}>
            <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Product" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Follower;
