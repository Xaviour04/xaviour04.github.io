import { FunctionalComponent } from "preact";

import styles from "./style.module.scss";

const Home: FunctionalComponent = () => {
    return (
        <>
            <div class={styles.hero}>
                <h2 class={styles.welcome}>Hi There!</h2>
            </div>
        </>
    );
};

export default Home;
