import styles from './styles.module.scss';

export function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <footer>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
          >
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button
            type="button"
            className={styles.playButton}
          >
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Tocar próxima" />
          </button>
         <button
            type="button"
          >
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer> 
    </div>
  );
}