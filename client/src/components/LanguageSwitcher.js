import React, { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedDate } from "react-intl";

const message = {
  English: {
    heading: "Welcome to MasterKey Technologies Limited",
    subheading: "Welcome to MasterKey Technologies Limited One",
    title: "Welcome to MasterKey Technologies Limited Two",
  },
  Bangla: {
    heading: "আমাদের মাস্টারকী টেকনোলজিস লিমিটেড",
    subheading: "আমাদের মাস্টারকী টেকনোলজিস লিমিটেড ওয়ান",
    title: "আমাদের মাস্টারকী টেকনোলজিস লিমিটেড টু",
  },
};

function LanguageSwitcher(props) {
  const [locale, setLocale] = useState("English");

  const handleChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange} defaultValue={locale}>
        {["English", "Bangla"].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>

      <IntlProvider locale={locale} messages={message[locale]}>
        <p>
          <FormattedMessage
            id="heading"
            defaultMessage="some default one"
            values={{ locale }}
          />
          <br />
          <FormattedMessage id="subheading" defaultMessage="some default one" />
        </p>
        <p>
          <FormattedMessage
            id="title"
            defaultMessage="lets learn a simple way in {channelName}"
            values={{ channelName: "forThoseWhoCode" }}
          />
        </p>
        <p>
          <FormattedDate
            value={props.date}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </p>
      </IntlProvider>
    </>
  );
}

export default LanguageSwitcher;
