import { IBond } from "../bond";
import { Action } from "@ngrx/store";

export enum BondActionTypes {
    SetCurrentBond = '[Bond] Set Current Bond',
    ClearCurrentBond = '[Bond] Clear Current Bond',
    InitializeCurrentBond = '[Bond] Initialize Current Bond'
}

export class SetCurrentBond implements Action {
    readonly type: BondActionTypes.SetCurrentBond;

    constructor(public payload: IBond) {}
}

export class ClearCurrentBond implements Action {
    readonly type: BondActionTypes.ClearCurrentBond;
}

export class InitializeCurrentBond implements Action {
    readonly type: BondActionTypes.InitializeCurrentBond;
}

export type BondActions = SetCurrentBond | ClearCurrentBond | InitializeCurrentBond;