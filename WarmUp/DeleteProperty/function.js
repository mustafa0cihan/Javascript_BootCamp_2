/**
 * ? Write a function that returns a new object without provided properties.
 * * Use a plain object and properties as argumants
 * Expected Result: ({ a: 1, b: 2, c: 3 }, 'b') => { a: 1, c: 3 }
 * 
 * /**
  * ? Sağlanan özellikler olmadan yeni bir nesne döndüren bir işlev yazın.
  * * Bağımsız değişken olarak düz bir nesne ve özellikler kullanın
  * Beklenen Sonuç: ({ a: 1, b: 2, c: 3 }, 'b') => { a: 1, c: 3 }
  */



const data = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

const without = (pObj, ...pKeyList) => {
    const newObject = { ...pObj };
    pKeyList.forEach((key) => {
        delete newObject[key];
    });

    return newObject;
};
export { data, without };