import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment-timezone";

const Wrapper = styled.div`
  color: #d97761;
  position: absolute;
  right: 690px;
  top: 87px;
`;

const NextReset = () => {
  const now = new Date();
  let daysUntilTuesday = 2 - now.getDay();
  if (daysUntilTuesday < 0) {
    daysUntilTuesday += 7;
  }
  let year = now.getFullYear();
  let month: number = now.getMonth();
  let nextResetDay = now.getDate() + daysUntilTuesday;
  const daysInThisMonth = new Date(year, month + 1, 0).getDate();
  if (nextResetDay > daysInThisMonth) {
    nextResetDay = nextResetDay - daysInThisMonth;

    month = month + 1;
    if (month === 12) {
      month = 0;
      year = year + 1;
    }
  }

  let formattedMonth = month < 10 ? `0${month + 1}` : (month + 1).toString();
  let formattedDay =
    nextResetDay < 10 ? `0${nextResetDay}` : nextResetDay.toString();
  const dateString = `${year}-${formattedMonth}-${formattedDay} 09:00`;

  const reset = moment.tz(dateString, "UTC");

  return <Wrapper>{reset && `Next weekly reset: ${reset.fromNow()}`}</Wrapper>;
};

export default NextReset;
