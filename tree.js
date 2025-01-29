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

      const find = (value, current = root) => {
        while(current && current.data) {
          if(current.data === value) return current;
          value < current.data ? current = current.left : current = current.right;
        }
        return null;
      }

      const findRec = (value, current = root) => {
        if(!current) return null;
        if(current.data === value) return current;
        return value < current.data ? findRec(value, current.left) : findRec(value, current.right);
      }

      const levelOrder = (callback) => {
        if(!callback) throw new Error("Callback is required");
        if(!root) throw new Error("Specify a valid tree");
        const queue = [root];
        let current = null;
        while(queue.length > 0){
          current = queue.shift();
          callback(current);
          if(current.left) queue.push(current.left);
          if(current.right) queue.push(current.right);
        }
      }

      const levelOrderRec = (callback, queue = [root]) => {
        if(!callback) throw new Error("Callback is required");
        if(!queue.length) return;

        let current = queue.shift();
        callback(current);

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
        
        levelOrderRec(callback, queue);
      }

      const preOrder = (callback, current = root) => {
        if(!callback) throw new Error("Callback is required");
        if(!current) return;
        callback(current);
        preOrder(callback, current.left);
        preOrder(callback, current.right);
      }

      const inOrder = (callback, current = root) => {
        if(!callback) throw new Error("Callback is required");
        if(!current) return;
        inOrder(callback, current.left);
        callback(current);
        inOrder(callback, current.right);
      }

      const processedArr = processArr(arr);
      const root = buildTree(processedArr);
     
    return { 
      arr, 
      root, 
      prettyPrint, 
      insert, 
      deleteItem, 
      find, 
      findRec, 
      levelOrder, 
      levelOrderRec, 
      preOrder,
      inOrder,
    }
}