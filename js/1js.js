var tkboxs = document.getElementById('tk1');
var tkbox = tkboxs.getElementsByClassName('tkbox');
var title = tkboxs.getElementsByClassName('title');
var titleWidth = 60;
var contentWidth = 470;
var n = 0;
for (var i = 0; i < title.length; i++) {
    title[i].idx = i;
    title[i].onclick = function() {
        n = this.idx;
        for (var i = 0; i < tkbox.length; i++) {
            if (i <= n) {
                tkbox[i].style.top = i * titleWidth + 'px';
            } else {
                tkbox[i].style.top = i * titleWidth + contentWidth + 'px';
            }
        }
    }
}


// 点击的序号记为n