type VerifyUserFn = (user: User, setValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username &&
        user.password === sentValue.password
    );
};

const bdUser = { username: 'andre', password: '1234' };
const sentUser = { username: 'andre', password: '1234' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
