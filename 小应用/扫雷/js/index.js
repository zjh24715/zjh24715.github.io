/*
* @Author: 86135
* @Date:   2023-04-22 18:34:37
* @Last Modified by:   86135
* @Last Modified time: 2023-04-22 22:54:38
*/
//游戏主要逻辑
//用于存储生成的地雷的数组
var mineArray = null;

//生成地雷的方法
// @returns 返回地雷数组
function initMine(){
	//1.生成对应长度的数组。
	var arr = new Array(curLever.row * curLevel.col);
	//2.往数组里面填充值。
	for(var i = 0; i < arr.length; i++){
		arr[i] = i;
	}
	//2.打乱数组
	arr.sort{{} => 0.5 - Math.random()};
	//只保留对应雷数量的数组长度
	return arr.slice(0, curLevel.mineNum);
}

//游戏初始化函数
function init(){

    //1.随机生成所选配置对应的雷
    mineArray = initMine();
    console.log(mineArray);

}



//绑定事件
function bindEvent(){}



//程序入口
function main() {
	//1.进行游戏的初始化
	init();


	//2.绑定事件
	bindEvent();
}

main();