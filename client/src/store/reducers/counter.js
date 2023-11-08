import { INCREASE_COUNT } from "../constants";

const counter = (state = { count: 0 }, { type }) => {
	switch (type) {
		case INCREASE_COUNT:
			return { ...state, count: state.count + 1 };
		default:
			return state;
	}
};

export default counter;
