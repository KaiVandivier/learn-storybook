import React from "react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import { PureInboxScreen } from "./InboxScreen";
import { defaultTasksData } from "./TaskList.stories";

// a simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: defaultTasksData
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
}

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  // Add a mocked store to provide data
  decorators: [story => <Provider store={store}>{story()}</Provider>]
}

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
