function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > -1) {
        return true
    } else if (navigator.userAgent.match(/Trident.*rv\:11\./)) {
        return true;
    } else {
        return false;
    }
}
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})