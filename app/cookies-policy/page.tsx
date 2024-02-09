import styles from './page.module.scss';

export default function CookiesPolicy() {
  return (
    <div className={styles.body}>
      <h1>Cookies Policy of Norse Yacht Co.</h1>
      <h6 className={styles.section}>Last Updated: 25.01.2024</h6>
      <p className={styles.section}>
        Welcome to Norse Yacht Co. This Cookies Policy explains how we use cookies and similar technologies on our website www.norseyacht.com. By using our website, you agree to the use of cookies and similar technologies as described in this policy.
      </p>
      <section className={styles.section}>
        <h3 className={styles.header}>Cookies Policy</h3>
        <p>
          This Cookie Policy (&quot;Policy&quot;) describes the use of cookies and related technologies on the Norse Yacht Co. website (&quot;Website&quot;) by Norse Yacht Co. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>What are Cookies?</h3>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to improve the user experience of websites by storing your preferences and information about your browsing habits.
        </p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>How Do We Use Cookies?</h3>
        <h5 className={styles.subheader}>We use cookies on our Website to:</h5>
        <ul>
          <li>Remember your preferences: We use cookies to remember your preferences, such as your language and location, so that we can provide you with a more personalized experience.</li>
          <li>Analyze website traffic: We use cookies to analyze website traffic to help us understand how people use our Website and to improve our services.</li>
          <li>Deliver targeted advertising: We use cookies to deliver targeted advertising to you based on your interests.</li>
          <li>Improve site security: We use cookies to help us improve the security of our Website.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>Types of Cookies We Use?</h3>
        <h5 className={styles.subheader}>We use the following types of cookies on our Website:</h5>
        <ul>
          <li>Essential cookies: These cookies are essential for the functioning of our Website and cannot be disabled. They include cookies that enable you to log in to your account, use a shopping cart, and make secure purchases.</li>
          <li>Performance cookies: These cookies collect information about how you use our Website, such as the pages you visit and the links you click. We use this information to improve the performance of our Website and to provide you with a better user experience.</li>
          <li>Functional cookies: These cookies allow us to remember your preferences, such as your language and location. This means that we do not need to ask you to re-enter this information each time you visit our Website.</li>
          <li>Targeting cookies: These cookies collect information about your browsing habits and interests. We use this information to show you targeted advertising that is relevant to you.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>How to Control Cookies</h3>
        <p>
          You can control your cookie preferences by using the settings on your browser. Most browsers allow you to block cookies, allow cookies for certain websites only, or delete cookies. Please note that if you block all cookies, you may not be able to use all the features of our Website.
        </p>
      </section>
      <p className={styles.section}>
        For more information about cookies and how to control them, please visit the following website: <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className={styles.link}>allaboutcookies.org</a>
      </p>
      <section className={styles.section}>
        <h3 className={styles.header}>Changes to Our Cookie Policy</h3>
        <p>
          We may update this Policy from time to time to reflect changes in our cookies practices. If we make any material changes, we will notify you by email or by posting a prominent notice on our Website.
        </p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.header}>Contact Us</h3>
        <p>
          If you have any questions about this Policy, please contact us at <a href="mailto:info@norseyacht.com" className={styles.link}>info@norseyacht.com</a>
        </p>
      </section>
    </div>
  )
}
