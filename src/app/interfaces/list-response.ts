import { IResponse } from "./response";

export interface IListResponse<T> extends IResponse{
    data:T[]
}
