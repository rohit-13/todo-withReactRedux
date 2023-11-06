import {UPDATE_TAB } from "../constant";

export const tabData = (data = "all", action) => {
    switch (action.type) {
      case UPDATE_TAB:
        return action.data;
      default:
        return data;
    }
  };