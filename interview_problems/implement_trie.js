/**
 * Implement a trie class with the following capabilities: 
 *  Trie() initializes the trie
 *  insert(word: string) inserts a string "word" into the trie
 *  search(word: string) Returns true if the string word is in the trie (i.e., was
 *  inserted before), and false otherwise.
 *  startsWith(prefix: string) Returns true if there is a previously inserted string 
 *  word that has the prefix prefix, and false otherwise.
 */

var Trie = function() {
  // Set the root as an empty object
  this.root = {};
}

/**
 * 
 * @param {string} word 
 * @returns {void}
 */
Trie.prototype.insert = function(word) {
  // Traverse starting at the node
  let node = this.root;

  // Loop over each character of the given word
  for (const char of word) {
    // If the character isn't already in the node, add it
    if (!node[char]) {
      node[char] = {};
    }
    // Update node to the current character
    node = node[char];
  }

  // Set isWord to be true to indicate this is the end of a word
  node.isWord = true;
}

/**
 * A helper function to traverse our trie
 * 
 * @param {string} word 
 * @returns {Object | null}
 */
Trie.prototype.traverse = function(word) {
  // Traverse starting with our root
  let node = this.root;
  // Loop over each character of a given string
  for (const char of word) {
    // Traverse to the next character
    node = node[char];
    // If the next character is not in our trie, return null
    if (!node[char]) return null;
  }

  // Return the node at the end of the string
  return node;
}

/**
 * 
 * @param {string} word 
 * @returns {boolean}
 */
Trie.prototype.search = function(word) {
  // Traverse the word and store the result in node
  const node = this.traverse(word);
  // If the node exists, and it is at the end of a word, we return true, otherwise return false
  return node !== null && node.isWord === true;
}

/**
 * 
 * @param {string} prefix 
 * @returns {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  // Traverse the prefix. If it is null, return false, otherwise return true
  return this.traverse(prefix) !== null;
}