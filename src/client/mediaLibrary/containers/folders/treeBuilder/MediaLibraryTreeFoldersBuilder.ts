import {ClientMediaFolder} from "@client/mediaLibrary/types";
import {TreeClientMediaFolder} from "@client/mediaLibrary/containers/folders/types";


export class MediaLibraryTreeFoldersBuilder {
	
	static buildTargetFoldersTreeAndBreadcrumbs(tree: TreeClientMediaFolder[], targetId: string | number): {
		tree: TreeClientMediaFolder | null
		breadcrumbs: TreeClientMediaFolder[]
	} {
		const result: {
			tree: TreeClientMediaFolder | null
			breadcrumbs: TreeClientMediaFolder[]
		} = {
			tree: null,
			breadcrumbs: [],
		};
		
		if (!tree?.length) {
			return result;
		}
		
		function findNode(node: TreeClientMediaFolder | undefined, breadcrumbs: TreeClientMediaFolder[] = []): ClientMediaFolder | undefined {
			if (!node) {
				return undefined;
			}
			
			const updatedBreadcrumbs: TreeClientMediaFolder[] = [...breadcrumbs, {...node, childs: undefined}];
			
			if (node.id.toString() === targetId.toString()) {
				result.tree = node;
				result.breadcrumbs = updatedBreadcrumbs;
				return node;
			}
			
			for (const child of node.childs || []) {
				const found = findNode(child, updatedBreadcrumbs);
				if (found) {
					return found;
				}
			}
			
			return undefined;
		}
		
		for (const node of tree) {
			const found = findNode(node);
			if (found) {
				break;
			}
		}
		
		if (result?.tree) {
			return {
				...result,
				tree: {
					...result?.tree,
					childs: result?.tree?.childs?.map((it) => {
						let newItem = it;
						if ('childs' in newItem) {
							delete newItem.childs
						}
						return newItem;
					})
				}
			}
		}
		return result;
	}
	
	static buildTree(folders:ClientMediaFolder[]):TreeClientMediaFolder[]{
		
		const tree: TreeClientMediaFolder[] = [];
		const childrenOf: Record<string, any[]> = {};
		
		for (let i = 0, length = folders.length; i < length; i++) {
			const item:TreeClientMediaFolder = {
				...folders[i],
				childs:[]
			};
			const id = item.id.toString();
			const parentId = item.parent_id?.toString() || '0';
			
			childrenOf[id] = childrenOf[id] || [];
			item.childs = childrenOf[id];
			
			if (parentId?.toString() !== '0') {
				childrenOf[parentId] = childrenOf[parentId] || [];
				childrenOf[parentId].push(item);
			} else {
				tree.push(item);
			}
		}
		
		return tree;
	}
}