import { useSelector } from "react-redux";

interface T_action {
  type: string;
}

export function counterReducer(state: number = 0, action: T_action) {
  switch (action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "X10":
      return state * 10;

    default:
      return state;
  }
}

// interface T_Todo_state {
//    todos: [];
// }

interface T_Todo_action {
  type: string;
  playload: string;
  index: number;
}

export const todosReducer = (state: string[] = [], action: T_Todo_action) => {
    console.log(2222, action);
    
  switch (action.type) {
    case "ADD_TODO":
    //   if (state.indexOf(action.playload) === 0) {
    //     return state;
    //   }
      return [...state, action.playload];
    case "UPDATE_TODO":
      const update = state.map((item, index) => {
        if (index === action.index) {
          return action.playload;
        }
        return item;
      });
      return update;
    case "DELETE_TODO":
      const deleteState = state.filter((item, index) => index !== action.index);
      return deleteState;

    default:
      return state;
  }
};
