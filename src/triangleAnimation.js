export var mY = 0;
document.body.mousemove( (e) => {

    // moving upward
    if (e.pageY < mY) {
        console.log('From Bottom');

    // moving downward
    } else {
        console.log('From Top');
    }

    // set new mY after doing test above
    mY = e.pageY;

});
