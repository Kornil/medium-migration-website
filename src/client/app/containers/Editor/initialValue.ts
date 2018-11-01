import { ValueJSON } from "slate";

const initialState: ValueJSON = {
  document: {
    nodes: [
      {
        nodes: [
          {
            leaves: [
              {
                text: ""
              }
            ],
            object: "text"
          }
        ],
        object: "block",
        type: "paragraph"
      }
    ]
  }
};

export default initialState;
