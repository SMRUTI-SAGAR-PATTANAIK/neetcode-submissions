class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        function _insert(root) {
            if(!root) {
                return {
                    key,
                    val,
                    left: null,
                    right: null
                }
            }
            if(root.key < key) {
                root.right = _insert(root.right);
            } else if(root.key > key) {
                root.left = _insert(root.left);
            } else {
                root.val = val;
            }
            return root;
        }
        this.root = _insert(this.root);
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        function _get(root) {
            if(!root) return -1;
            if(key > root.key) {
                return _get(root.right);
            } 
            if(key < root.key) {
                return _get(root.left);
            }
            return root.val;
        }
        return _get(this.root)
    }

    /**
     * @returns {number}
     */
    getMin() {
        function _getMin(root) {
            if(!root) return -1;
            if(root.left) return _getMin(root.left);
            return root.val;
        }
        return _getMin(this.root);
    }

    /**
     * @returns {number}
     */
    getMax() {
        function _getMax(root) {
            if(!root) return -1;
            if(root.right) return _getMax(root.right);
            return root.val;
        }
        return _getMax(this.root);
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        function _getMin(root) {
            if(!root) return -1;
            if(root.left) return _getMin(root.left);
            return {key: root.key, val:root.val}
        }
        function _remove(root, key) {
            if(!root) return null;
            if(key > root.key) {
                root.right = _remove(root.right, key);
            } else if(key < root.key) {
                root.left = _remove(root.left, key);
            } else {
                if(!root.left) return root.right;
                if(!root.right) return root.left;
                const props = _getMin(root.right);
                root.key = props.key;
                root.val = props.val;
                root.right = _remove(root.right, props.key);
            }
            return root;
        }
        this.root = _remove(this.root, key);
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        const result = [];
        function _inorder(root) {
            if(!root) return;
            _inorder(root.left);
            result.push(root.key);
            _inorder(root.right);
        }
        _inorder(this.root);
        return result;
    }
}
