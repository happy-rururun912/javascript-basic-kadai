// btnとtextを取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');
 
// クリックされたときイベント処理
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
  console.log('ボタンをクリックしました');
});