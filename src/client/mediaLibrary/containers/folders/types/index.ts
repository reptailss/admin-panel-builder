import {ClientMediaFolder} from "@client/mediaLibrary/types";

export type TreeClientMediaFolder = ClientMediaFolder & {
	childs?: ClientMediaFolder[]
}