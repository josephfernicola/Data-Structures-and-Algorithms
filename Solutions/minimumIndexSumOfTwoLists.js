// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 const findRestaurant = function(list1, list2) {
    const map = {}
    for (let i = 0; i < list1.length; i++) {
        const list1Word = list1[i];
        const index = list2.indexOf(list1Word);
        if(index > -1) {
            if (map[index + i]) {
                map[index + i].push(list1Word);
            } else {
                map[index + i] = [list1Word];
            }
        }
    }
    return Object.values(map)[0]
};