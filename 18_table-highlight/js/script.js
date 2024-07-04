$(function() {
    $("td").hover(function() {
        // 親要素(tr要素)にtargetクラスを追加
        $(this).parent().addClass("target");

        // 親要素から見て自分が何番目の子要素なのか調べる
        var myIndex = $(this).index();

        // myindexに1プラス
        myIndex ++;

        // 各行のmyIndexのx番目の子要素にtargetクラスを追加する
        $("td:nth-child(" + myIndex + ")").addClass("target");
    }, function() {
        // マウスアウト時にtargetクラスを削除
        $(".target").removeClass("target");
    });
});