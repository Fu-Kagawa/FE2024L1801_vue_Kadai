// JavaScript用ファイル
new Vue({
  el: '#app',
  data: {
    name: '',            // ユーザーが入力した名前
    fortune: '',         // 運勢の結果
    errorMessage: '',    // エラーメッセージ
    isValidName: false   // 名前のバリデーションフラグ
  },
  methods: {
    validateName() {
      if (this.name.length < 5) {
        this.errorMessage = '名前は5文字以上で入力してください。';
        this.isValidName = false;
      } else {
        this.errorMessage = '';
        this.isValidName = true;
      }
    },
    drawFortune() {
      // バリデーションが成功した場合のみランダムな運勢を生成
      if (this.isValidName) {
        const randomNumber = Math.floor(Math.random() * 101);

        if (randomNumber >= 80) {
          this.fortune = 'daikichi';
        } else if (randomNumber >= 60) {
          this.fortune = 'kichi';
        } else if (randomNumber >= 40) {
          this.fortune = 'chukichi';
        } else if (randomNumber >= 20) {
          this.fortune = 'shokichi';
        } else {
          this.fortune = 'kyo';
        }
      }
    }
  }
});