import { IResponse } from "./response";

export interface ISingleResponseModel<T> extends IResponse {
  data: T;
}