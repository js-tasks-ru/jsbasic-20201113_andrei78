/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let newDiv = document.createElement('ul');
    let newArr = [];
    for (let friend of friends) {
      newArr.push(friend.firstName + " " + friend.lastName)
    }
    for (let i = 0; i < newArr.length; i++) {
      newDiv.innerHTML = newDiv.innerHTML + `<li>${newArr[i]}</li>`;
    }
    return newDiv;
}
