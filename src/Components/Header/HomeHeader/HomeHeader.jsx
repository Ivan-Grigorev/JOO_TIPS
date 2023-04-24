const HomeHeader = () => {
  return (
    <>
      <header class="header container">
        <a href="/templates/homepage.html" class="logo-header">
          <img src="/static/images/logo.svg" alt="logo" />
        </a>
        <nav class="navbar">
          <a href="#who-we-are">Who we are</a>
          <a href="#start-learning">Start learning</a>
          <a href="#for-teams">For teams</a>
          <a href="#for-schools">For schools</a>
        </nav>
        <button class="btn-login" onclick="location.href={% url 'log_in' %}">
          LOG IN
        </button>

        {/* <!-- ! my vers --> */}
        <div class="current-flag">
          <ul class="flag-list">
            <li>
              <a href="#">
                <img src="/static/images/ukraine-flag.svg" alt="ukraine-flag" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/static/images/poland-flag.svg" alt="poland-flag" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/static/images/romania-flag.svg" alt="romania-flag" />
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- ! Ivan code -->
        <!-- <select class="language" onchange="this.options[this.selectedIndex].value &&
                                                (window.location = this.options[this.selectedIndex].value);">
                <option value="http://www.joo.tips" class="ukrain-flag">
                    EN
                </option>
                <option value="http://www.joo.tips/ua/">
                    UA
                </option>
            </select> --> */}

        {/* Mobile version */}
        <nav class="mobile-navbar">
          <label for="mobile-dropdown">
            {/* burger menu */}
            {/* <!-- <img src="{% static 'images/mobile_bar.svg' %}" width="50" height="50"> --> */}
            <img
              src="/static/images/mobile_bar.svg"
              alt="mobile-bar"
              width="50"
              height="50"
            />
          </label>
          <input type="checkbox" id="mobile-dropdown" />
          <div class="dropdown-slide">
            <a href="#who-we-are">WHO WE ARE</a>
            <a href="#start-learning">START LEARNING</a>
            <a href="#for-schools">FOR SCHOOLS</a>
            <a href="#for-teams">FOR TEAMS</a>
            <div style="display: flex">
              <button
                class="mobile-btn-login is-hidden"
                onclick="location.href={% url 'log_in' %}"
              >
                LOG IN
              </button>
              <select
                class="mobile-language"
                onchange="this.options[this.selectedIndex].value &&
                        (window.location = this.options[this.selectedIndex].value);"
              >
                <option value="http://www.joo.tips">EN</option>
                <option value="http://www.joo.tips/ua/">UA</option>
              </select>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HomeHeader;
