const person = {
    firstName: 'John',
    lastName: 'Rodríguez',
    tags: ['a', 'b', 'c'],
    showTags() {
        const that = this;
        this.tags.forEach(function (tag) { console.log(tag, that.firstName) });
    },
};

person.showTags();

/*
Another approach:
with this methods we can changes the value of this or this function.    
apply()
call()
bind()
*/

// apply():
function playVideo(a, b)
{
    console.log('method: ',this);
}

playVideo.apply({method: 'apply'}, [1, 2]); // most be []
playVideo.call({method: 'call'}, 1, 2);

// const fn = playVideo.bind({method: 'bind'});
// fn();

playVideo.bind({method: 'bind'})();

playVideo();

