    const buildTree = (arr) => {
        if(arr.length <= 0) return null;
        const mid = Math.floor((arr.length - 1) / 2);
        const root = Node(arr[mid]);
        root.left = buildTree(arr.slice(0, mid));
        root.right = buildTree(arr.slice(mid + 1, arr.length));
        return root;
    }
