/**
 * @description
 * 当前版本号为 versionManager.version
 * 版本号的增改策略如下：
 * 每次调用对应函数方法时，对应版本号 +1, 下级版本号清零
 * @example
 * versionManager.version = V0.11.12;
 * versionManager.patch() // version => V0.11.13
 * versionManager.minor() // version => V0.12.0
 * versionManager.major() // version => V1.0.0
 * versionManager.rollback() // 回退到上一次的版本号 v0.12.0
 */

// export const versionManager = {
//     version: "v0.0.0",
//     patch() {},
//     minor() {},
//     major() {},
//     rollback() {}
//   };

  //print
  function print(a){
      return console.log(a);
  }
  //version入数组
  var version = "v0.0.0";
  var arr = version.split("");
  print(arr);
