function isBestFriend(object1, object2) {
    if (object1.name == object2.friend && object1.friend == object2.name) {
        return true;
    } else {
        return false;

    }
}
const object1 = { name: 'abul', friend: 'babul' };
const object2 = { name: 'babul', friend: 'abul' };
// console.log(isBestFriend(object1, object2));