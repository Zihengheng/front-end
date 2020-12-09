// @description
//  * 写一个方法，可以利用字符串路径获取对象集合的值，当值不存在时返回错误信息
//  * @example
//  * let object = {'a': [{'b': {'c': 3}}]};
//  * let [err, result] = takeValue(object, 'a[0].b.c');
//  * console.log(err, result); // => null, 3
//  * let [err, result] = takeValue(object, 'a[0].d.c');
//  * console.log(err, result); // => Is err about 'd', null
//  */


