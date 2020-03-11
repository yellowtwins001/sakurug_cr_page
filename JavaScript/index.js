// スマホ用のハンバーガーメニュー
var menuBtn = document.querySelector('.header--menu__sp');
menuBtn.addEventListener("click", function(){
    switchVisionOfGrobalNav();
});

var headerNavLinks = document.querySelectorAll('.headerNav--link');
for (var headerNavLink of headerNavLinks) {
    headerNavLink.addEventListener("click", function(){
        switchVisionOfGrobalNav();
    });
}

function switchVisionOfGrobalNav() {
        menuBtn.classList.toggle("active");
        document.querySelector('.header--grobalNav__sp').classList.toggle("active");

        var sections = [".mainVisual", ".value", ".service", ".flow", ".contact", ".footer"];

        for (var i=0; i<sections.length; i++) {
            document.querySelector(sections[i]).classList.toggle("off");
        }
}



/*
* 問い合わせフォーム：お打ち合わせにかんして「希望しない」を選択すると日程候補を入れるフォームを消す
*/
function appointmentRadioClick() {
    var radio = document.querySelector('form');
    var radioNodeList = radio.appointment;
    var formSchedule = document.querySelectorAll('.schedule');

    if (radioNodeList.value === 'no') {
        for (var el of formSchedule) { // 入力項目を隠す
            if (!el.classList.contains('hidden_inputDate')) {
                // el.classList.add('nonactive');
                el.classList.add('hidden_inputDate');
            }
        }
        formSchedule[0].querySelector('input').required = false; // 隠した入力項目の「required」属性を隠す
    } else {
        for (var el of formSchedule) {
            if (el.classList.contains('hidden_inputDate')) { // 隠した入力項目を表示させる
                el.classList.remove('hidden_inputDate');
            }
        }
        formSchedule[0].querySelector('input').required = true;　// 消えている可能性がある入力項目の「required」属性を付与する
    }
}

var comment = "・会って話を聞いてみたい"
                + "\n" + "・○○できる？"
                + "\n" + "・○○の見積を欲しい"
                + "\n" + "など、簡単にご記入ください！";
document.querySelector('.form--input__textarea').placeholder = comment;


/**
 * フォーム送信後に「送信しました」と表示させてフォームをリセットする 
 */
function sendSuccess() {
    window.alert('送信しました');
    document.contact.classList.add('nonactive');
}