//定数設定
const GAME_FPS = 1000/60;
const SCREEN_SIZE_W = 1024;
const SCREEN_SIZE_H = 256;
const BALL_SIZE_WH = 1;

//実画面
let can = document.getElementById('can');
let con = can.getContext('2d');

//キャンバスサイズ設定

//描画をなめらかにしない
con.mozimageSmoothingEnabled = false;
con.msimageSmoothingEnabled = false;
con.webkitimageSmoothingEnabled = false;
con.imageSmoothingEnabled = false;


//フレームレート維持
let frameCount = 0;
let startTime;

window.onload = function(){
	draw()
}

//素材画像を取得
//let chImg = new Image();
//chImg.src = 'sprite.png';

// 更新処理
function update() {

}

// 描画処理
function draw() {
  //おじさん描画
	con.fillStyle = '#66AAFF';
	con.fillRect(0,0,SCREEN_SIZE_W,SCREEN_SIZE_H);
	con.fillStyle = "#000000";
	con.fillRect(30,30,BALL_SIZE_WH,BALL_SIZE_WH);



  //vcon.drawImage(chImg,0,0,16,32, 0,0,16,32);
  //フレームカウント表示
  //	vcon.fillStyle = '#FFF';
  //	vcon.fillText('Frame:'+frameCount,10,10);
  //背景拡大表示
  //	con.drawImage(vcan,0,0,SCREEN_SIZE_W,SCREEN_SIZE_H,
  //		0,0,SCREEN_SIZE_W*2,SCREEN_SIZE_H*2);
}


//ループ開始　
//window.onload = function() {
//	startTime = performance.now();
//	mainLoop();
//}

//メインループ
function mainLoop() {
  //今何フレーム目か算出
	let nowTime = performance.now();
	let nowFrame = (nowTime - startTime) / GAME_FPS;
  
  //現在のフレームがフレームカウントより大きければ更新・描画処理を実行
	if (nowFrame > frameCount) {

		let c = 0;
		while (nowFrame > frameCount) {
			frameCount++;
			//更新処理
			update();
			//cが4以上になったら一旦ループ止める。（つまり4フレーム分回す。）
			if ( ++c >= 4)break;
		}

		//描画処理
		draw();
	}
	requestAnimationFrame(mainLoop);
}