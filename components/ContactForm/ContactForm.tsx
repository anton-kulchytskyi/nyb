import Image from 'next/image';
import ContactFormImg from '@/public/contact_img.png';

import typo from '@/styles/typography.module.scss';
import styles from './contactForm.module.scss';

const ContactForm = () => {
  return (
    <section className={styles.contact_section}>
      <div className={styles.container}>
        <Image
          src={ContactFormImg}
          alt='Contact Form Image'
        />
        <div className={styles.contact__form}>
          <h4 className={`${typo.typo_h4} ${typo.typo_h4__white}`}>Have Questions? Contact Us</h4>
          <form action="">
          
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;
