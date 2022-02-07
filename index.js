// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr1 = [1, 2, 3]; // еще использую этот массив в задании 2
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log("Задание 1. Массив, что получился после конкатенации:");
console.log(arr3);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
arr1.reverse();
console.log("Задание 2. Массив, что получился после реверса:");
console.log(arr1);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(
  "Задание 3. Массив, что получился после добавления в его конец новых элементов:"
);
console.log(arr4);

// 4.  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
console.log(
  "Задание 4. Массив, что получился после добавления в его начало новых элементов:"
);
console.log(arr5);

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
const arr6 = ["js", "css", "jq"];
console.log("Задание 5. Массив, что есть до удаления его первого элемента:");
console.log(arr6);
let shifted = arr6.shift();
console.log("Задание 5. Первый элемент, что удаляется: " + shifted);
console.log(
  "Задание 5. Массив, что получился после удаления его первого элемента:"
);
console.log(arr6);

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его.
const arr7 = ["js", "css", "jq"];
console.log("Задание 6. Массив, что есть до удаления его последнего элемента:");
console.log(arr7);
let popped = arr7.pop();
console.log("Задание 6. Последний элемент, что удаляется: " + popped);
console.log(
  "Задание 6. Массив, что получился после удаления его последнего элемента:"
);
console.log(arr7);

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arr8 = [1, 2, 3, 4, 5]; // еще использую этот массив в задании 9
const arr9 = arr8.slice(0, 3);
console.log(
  "Задание 7. Массив, что получился после копирования элементов [1, 2, 3]:"
);
console.log(arr9);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arr10 = arr8.slice(3, 5);
console.log(
  "Задание 8. Массив, что получился после копирования элементов [4, 5]:"
);
console.log(arr10);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
arr8.splice(1, 2);
console.log(
  "Задание 9. Массив, что получился после удаления элементов [2, 3]:"
);
console.log(arr8);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arr11 = [1, 2, 3, 4, 5];
const arr12 = arr11.splice(1, 3);
console.log(
  "Задание 10. Новый массив, что получился после копирования элементов [2, 3, 4]:"
);
console.log(arr12);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(3, 0, "a", "b", "c");
console.log(
  'Задание 11. Массив, что получился после вставки элементов ["a", "b", "c"]:'
);
console.log(arr13);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr14 = [1, 2, 3, 4, 5];
arr14.splice(1, 0, "a", "b");
arr14.splice(6, 0, "c");
arr14.splice(8, 0, "e");
console.log(
  'Задание 12. Массив, что получился после вставки элементов ["a", "b", ..., "c", ..., "e"]:'
);
console.log(arr14);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arr15 = [3, 4, 1, 2, 7];
arr15.sort();
console.log(
  "Задание 13. Массив, что получился после его сортировки по порядку кодовых точек Unicode:"
);
console.log(arr15);

/* 14. Дан массив со следующими объектами внутри. 
Для каждого элемента выведите сообщение в консоль типа 
“Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет” */
const arr16 = [
  // еще использую этот массив в задании 15
  {
    firstName: "Test",
    lastName: "Testovich",
    age: 42,
    gender: "male",
  },
  {
    firstName: "User",
    lastName: "Userovich",
    age: 12,
    gender: "male",
  },
  {
    firstName: "Tyotya",
    lastName: "Testovna",
    age: 16,
    gender: "female",
  },
  {
    firstName: "Logina",
    lastName: "Consolevna",
    age: 42,
    gender: "female",
  },
];
console.log("Задание 14. Обхожу массив:");
console.log(arr16);
// стрелочные не юзаю
arr16.forEach(function callbackfn(currentValue, index) {
  console.log(
    `Пользователь ${currentValue.firstName} ${currentValue.lastName}, имеющий пол ${currentValue.gender}, в возрасте ${currentValue.age} лет, лежит в массиве под индексом ${index}`
  );
});

/* 15. Дан массив со следующими объектами внутри. 
Создайте новый массив на основании старого массива, 
добавив каждому пользователю в новом массиве свойство telephoneNumber 
которое может быть или строкой или числом (на ваше усмотрение). */
// стрелочные не юзаю
arr16.map(function callbackfn(currentValue) {
  currentValue["telephoneNumber"] = "";
});
console.log("Задание 15. Добавленный номер телефона:");
console.log(arr16);

/* 16. Дан массив со следующими объектами внутри. 
Создайте новый массив на основании старого массива, 
в котором будут только те совершеннолетние пользователи, 
у которых будет определенный пол. */
const arr17 = [
  // еще использую этот массив в задании 15
  {
    firstName: "Test",
    lastName: "Testovich",
    age: 42,
    gender: "male",
  },
  {
    firstName: "User",
    lastName: "Userovich",
    age: 12,
    gender: "male",
  },
  {
    firstName: "Tyotya",
    lastName: "Testovna",
    age: 16,
    gender: "female",
  },
  {
    firstName: "Logina",
    lastName: "Consolevna",
    age: 42,
    gender: "female",
  },
  {
    firstName: "Undefined",
    lastName: "Undefinovich",
    age: 99,
  },
  {
    firstName: "Null",
    lastName: "Nullovich",
    gender: "male",
  },
];
console.log("Задание 16. Старый массив:");
console.log(arr17);
const arr18 = arr17.filter(function callbackfn(currentValue) {
  // в принципе, работало и без оператора опциональной последовательности, но пусть будет)
  if (currentValue?.age >= 18 && typeof currentValue?.gender !== "undefined") {
    return true;
  }
});
console.log(
  "Задание 16. Новый массив, в который вошли только совершеннолетние и с определенным полом:"
);
console.log(arr18);

/* Дан следующий массив.
Создайте новый массив на основании старого массива, в котором не будет вложенных массивов. */
const arr19 = [1, 2, 3, [10, 20, 30, [100, 200, 300, [1000, 2000, 3000]]]];
const arr20 = arr19.flat(Infinity); // на месте Infinity спокойно могла быть 3. Я просто решил понтануться)
console.log("Задание 17. Массив, без подмассивов:");
console.log(arr20);