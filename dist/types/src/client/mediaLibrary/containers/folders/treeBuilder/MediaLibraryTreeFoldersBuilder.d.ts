import { ClientMediaFolder } from "../../../types";
import { TreeClientMediaFolder } from "../types";
export declare class MediaLibraryTreeFoldersBuilder {
    static buildTargetFoldersTreeAndBreadcrumbs(tree: TreeClientMediaFolder[], targetId: string | number): {
        tree: TreeClientMediaFolder | null;
        breadcrumbs: TreeClientMediaFolder[];
    };
    static buildTree(folders: ClientMediaFolder[]): TreeClientMediaFolder[];
}
