import React, { useState } from 'react';
import { DropDownButton } from "@progress/kendo-react-buttons";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";

import classes from './operations.module.scss';

const operations = [
  {
    text: "Get random player",
    id: "randomUser",
  },
  {
    text: "Give random money to every user",
    id: "randomMoney",
  },
  {
    text: "Close the day",
    id: "closeTheDay",
  },
  {
    text: "Close the week",
    id: "closeTheWeek",
  },
  {
    text: "Regenerate data",
    id: "regenerateData",
  },
];

const Operations = (props) => {
  
  const [alert, setAlert] = useState(false)

  const randomUserHandle = () => {
    props.onChange()
  }

  const randomMoneyHandle = () => {
    props.onChange("/leaderboard/randomMoney/3")
  }

  const regenerateDataHandle = () => {
    setAlert({
      type: "warning",
      text: "Depending on the size of the database this action may take some time"
    })
    props.onChange("/leaderboard/users/generator")
  }

  const closeTheDayHandle = () => {
    props.onChange("/leaderboard/closeTheDay")
  }

  const closeTheWeekHandle = () => {
    props.onChange("/leaderboard/closeTheWeek")
  }

  const handleChange = (event) => {
    switch(event.item.id) {
      case "randomUser":
        randomUserHandle()
        break;
      case "regenerateData":
        regenerateDataHandle()
        break;
      case "randomMoney":
        randomMoneyHandle()
        break;
      case "closeTheDay":
        closeTheDayHandle()
        break;
      case "closeTheWeek":
        closeTheWeekHandle()
        break;
      default:
        break;
    }
  };

  return (
    <div className="row example-wrapper" className={classes.Operations}>
      <div className="col-xs-12 col-sm-6 example-col">
        <DropDownButton 
          text="Operations" 
          items={operations}
          primary={true}
          onItemClick={handleChange} />
      </div>
      <NotificationGroup
        style={{
          right: 0,
          bottom: 0,
          alignItems: "flex-start",
          flexWrap: "wrap-reverse",
          zIndex: 200
        }}
      >
        <Fade>
            {alert && (
              <Notification
                type={{
                  style: alert.type,
                  icon: true,
                }}
                closable={true}
                onClose={() => setAlert(false)}
              >
                <span>{alert.text}</span>
              </Notification>
            )}
          </Fade>
        </NotificationGroup>
    </div>
  );
};

export default Operations