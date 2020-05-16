import React from "react";
import ReactDOM from "react-dom";

import { WithPinnedTasks } from "./TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WithPinnedTasks />, div);

  // We expect the task title "Task 6 (pinned)" to be rendered _first_, not at the end
  const lastTaskInput = div.querySelector(".list-item:nth-child(1) input[value='Task 6 (pinned)']");
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
