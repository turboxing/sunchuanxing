/**
 * Created by sunchuanxing on 2017/12/12.
 */


var submit = document.getElementsByClassName('submit-btn');
submit[0].addEventListener('click', function() {
    alert('你点击了这个按钮-->' + submit[0].innerHTML);
}, false);

function alertWarming() {
    alert('hello world');

}