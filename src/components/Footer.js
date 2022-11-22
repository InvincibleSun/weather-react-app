import React from "react";

export default function Footer() {
  return (
    <footer>
      <a href="https://weather.com" className="more-info">
        More info...
      </a>
      <p className="git-link">
        <a
          href="https://github.com/InvincibleSun/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code in GitHub
        </a>
        , by Yulia Vitiunina
      </p>
    </footer>
  );
}
