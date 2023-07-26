const CookieAbout = () => {
  return (
    <>
      <p>
        Cookies are small text files that websites store on your computer or
        device when you visit them.{" "}
        <span className="bold">
          These files contain a small amount of data, such as information about
          your visit to the site, preferences, or authentication details.
        </span>
      </p>

      <p>
        The main purpose of cookies is to help websites remember specific
        information about you to provide a more personalized and convenient user
        experience.{" "}
        <span className="bold">
          For example, when you log in to a site using your credentials, cookies
          allow you to remain authenticated throughout your session, so you
          don't have to enter your login and password every time.
        </span>
      </p>

      <p>
        <span className="bold">
          Cookies can be either temporary (session cookies), which are stored
          only for the duration of your visit to the site, or persistent, which
          are stored on your device for a longer period.
        </span>{" "}
        However, cookies do not pose a threat to your security, as they are not
        programs and cannot execute code or transmit viruses.
      </p>

      <p>
        It's essential to note that{" "}
        <span className="bold">
          the storage of cookies may be limited by your browser settings, and
          you can choose whether you want to allow sites to store them on your
          device or prefer to delete them after each visit.
        </span>{" "}
        Typically, users can manage cookie settings in their browsers to balance
        between convenience and privacy while browsing the internet.
      </p>

      <p>
        <span className="bold">
          Furthermore, as a user, you have control over your cookie preferences,
          and you can always modify these settings in your personal account or
          profile on the website.
        </span>{" "}
        This way, you can tailor your cookie preferences according to your
        individual needs and ensure a browsing experience that aligns with your
        privacy concerns.
      </p>
    </>
  );
};

export default CookieAbout;
