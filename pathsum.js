/**
 * Definition for a binary tree node.
 * 
 */

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if(!root) return false; // to make sure our root node is not empty
    
    let hasPath = false;
    
//         using recursive approach, we create a function to help with the checking 
    const searchTree = (node,sum) => {
        if(node.left == null && node.right == null){ // if there are no right and left nodes/leaves
            if(sum === node.val){ //confirm if that node without leaves meets the requirement alone
                hasPath = true;
            } return
        }
        
        
//         using recursion, search for the sum in each of the branches of the tree (if they exist) and their subs
        if(node.left != null){ // if the left node exists
            searchTree(node.left, (sum - node.val))// subtract value of the node from our current sum
        }
        if (node.right != null){ // if the right node exists
            searchTree(node.right, (sum - node.val)) // subtract value of the node from our current sum
        }
    }
    
    
    searchTree(root, targetSum) //recursively search the main tree using the provided targetSum
    return hasPath;
};
let root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22;
console.log(hasPathSum(root, targetSum));