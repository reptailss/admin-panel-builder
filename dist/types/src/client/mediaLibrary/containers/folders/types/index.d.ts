import { ClientMediaFolder } from "../../../types";
export type TreeClientMediaFolder = ClientMediaFolder & {
    childs?: ClientMediaFolder[];
};
