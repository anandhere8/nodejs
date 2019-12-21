var name='Anand';
var age= 21;
var hobbie='coding';

function userInfo(username, userage, userhobbie)
{
    return (
        'Name : ' + username +
        ', Age : ' + userage +
        ', Hobbie : ' + userhobbie
    );
}

console.log(userInfo(name,age,hobbie));