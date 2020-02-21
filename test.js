const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
const result = words.filter( function(word) { 
    if  (word.length > 6) {
        return word; 
    }
});
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]