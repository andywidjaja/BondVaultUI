import { BondActions, BondActionTypes } from "./bond.actions";
import { IBond } from "../bond";
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
    bonds: BondState;
}

export interface BondState {
    currentBond: IBond
}

const initialBondState: BondState = {
    currentBond: null
};

export function bondReducer(state = initialBondState, action: BondActions): BondState {
    switch (action.type) {
        case BondActionTypes.SetCurrentBond:
            return {
                ...state, currentBond: action.payload
            };

        default:
            return state;
    }
}