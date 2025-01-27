export const ArrayProcessor = () => {

    const mergeSort = (arr) => {
        if(arr.length <= 1) return arr;
        const mid = Math.floor((arr.length - 1) / 2);
        const left = mergeSort(arr.slice(0, mid + 1));
        const right = mergeSort(arr.slice(mid + 1));
        return merge(left, right);
    }

    const merge = (left, right) => {
        const mergedArr = [];
        let i = 0; 
        let j = 0;
        let k = 0;
        while(i < left.length && j < right.length){
            left[i] <= right[j] ? mergedArr[k++] = left[i++] : mergedArr[k++] = right[j++];
        }
        while(i < left.length){
            mergedArr[k++] = left[i++];
        }
        while(j < right.length){
            mergedArr[k++] = right[j++];
        }
        return mergedArr;
    }


    return { mergeSort, removeDuplicates }
}