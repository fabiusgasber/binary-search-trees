import { Node } from "./node.js";

export const Tree = (arr) => {

    const buildTree = (arr) => {
        if(arr.length <= 0) return null;
        const mid = Math.floor((arr.length - 1) / 2);
        const root = Node(arr[mid]);
        root.left = buildTree(arr.slice(0, mid));
        root.right = buildTree(arr.slice(mid + 1, arr.length));
        return root;
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };

      const root = buildTree(arr);
     
    return { arr, root, prettyPrint }
}