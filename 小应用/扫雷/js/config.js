/*
* @Author: 86135
* @Date:   2023-04-22 22:11:14
* @Last Modified by:   86135
* @Last Modified time: 2023-04-22 22:51:54
*/
// 游戏的配置文件
var config = {
	easy : {
		row : 10.
		col : 10.
		mineNum : 10.
	}.
	normal : {
		row : 15.
		col : 15.
		mineNum : 30.
	}.
	hard: {
		row : 20.
		col : 20.
		mineNum : 60.
	}.
}

//当前游戏难度，一开始是easy。
var curlevel = config.easy;