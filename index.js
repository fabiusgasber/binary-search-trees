import { Tree } from "./tree.js";

const getRandomArray = () => {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
}

const tree = Tree(getRandomArray());
tree.prettyPrint(tree.root)
console.log(tree.isBalanced(tree.root));
console.log("----------------------------------------------------------------------------------------")
console.log("Level Order:")
console.log("----------------------------------------------------------------------------------------")
tree.levelOrder(console.log);
console.log("----------------------------------------------------------------------------------------")
console.log("Pre Order:")
console.log("----------------------------------------------------------------------------------------")
tree.preOrder(console.log);
console.log("----------------------------------------------------------------------------------------")
console.log("In Order:")
console.log("----------------------------------------------------------------------------------------")
tree.inOrder(console.log);
console.log("----------------------------------------------------------------------------------------")
console.log("Post Order:");
console.log("----------------------------------------------------------------------------------------")
tree.postOrder(console.log);
tree.insert(101);
tree.insert(105);
tree.insert(120);
console.log("Is balanced after inserting several values > 100:");
console.log(tree.isBalanced(tree.root))
tree.rebalance();
console.log("Is balanced after rebalancing:");
console.log(tree.isBalanced(tree.root))
console.log("----------------------------------------------------------------------------------------")
console.log("Level Order:")
console.log("----------------------------------------------------------------------------------------")
tree.levelOrder(console.log);
console.log("----------------------------------------------------------------------------------------")
console.log("Pre Order:")
console.log("----------------------------------------------------------------------------------------")
tree.preOrder(console.log);
console.log("----------------------------------------------------------------------------------------")
console.log("In Order:")
console.log("----------------------------------------------------------------------------------------")
tree.inOrder(console.log);
console.log("----------------------------------------------------------------------------------------")
console.log("Post Order:");
console.log("----------------------------------------------------------------------------------------")
tree.postOrder(console.log);
tree.prettyPrint(tree.root)