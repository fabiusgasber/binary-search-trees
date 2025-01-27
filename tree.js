import { ArrayProcessor } from "./array-processor.js";
import { Node } from "./node.js";

export const Tree = (arr) => {

    const buildTree = (arr) => {
        if(arr.length <= 0) return null;
        const mid = Math.floor((arr.length) / 2);
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

      const processArr = (arr) => {
        const processor = ArrayProcessor();
        const unique = processor.removeDuplicates(arr);
        const sortedUnique = processor.mergeSort(unique);
        return sortedUnique;
      }

      const insert = (value, rootNode = root) => {
        if(!rootNode) return Node(value);
        if(rootNode.data === value) return rootNode;
        let current = rootNode;
        value <= current.data ? rootNode.left = insert(value, current.left) : rootNode.right = insert(value, current.right);
        return rootNode;
      }

      const deleteItem = (value, current = root) => {
         if(!current) return;
         if(current.data === value) {
           if(!current.left && !current.right) return null;
           if(current.left && !current.right) return current.left;
           if(current.right && !current.left) return current.right;
           if(current.right && current.left){
              const old = current;
              current = current.right;
              if(!current.left) {
                current.left = old.left;
                return current;
              }
              while(current.left) {
                const prev = current;
                if(prev.left.left === null) {
                  current = current.left;
                  prev.left = null;
                }
                else {
                  current = current.left;
                }
              }
              current.left = old.left;
              current.right = old.right;
              if(value === root.data) root.data = current.data;
              return current;
           }
         };
         value < current.data ? current.left = deleteItem(value, current.left) : current.right = deleteItem(value, current.right);
         return current;
      }

      const processedArr = processArr(arr);
      const root = buildTree(processedArr);
     
    return { arr, root, prettyPrint, insert, deleteItem}
}