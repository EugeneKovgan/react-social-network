import styles from './Footer.module.scss';
import github_img from '../../assets/svg/eva_github-outline.svg';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className='container'>
                <div className={styles.footer_container}>
                    <div className='footer-info'>
                        <h1>Social Network</h1> © 2022 Designed by Eugene Kovgan
                    </div>
                    <div className={styles.footer_github}>
                        <a href='https://github.com/eugenekovgan' target='blank'>
                            <img className={styles.svg_btn} src={github_img} alt='github' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
