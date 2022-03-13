import { User, Roles, Status } from './Models';

const user: User = {
    firstName: "Amine",
    lastName: "AMAZZAL",
    phone: "+212565656052",
    roles: Roles.admin,
    status: Status.VALID
}

class userInterFace {
    getFullName(user?: User) {
        if ( user ) {
            return `${user.firstName} ${user.lastName}`
        } else {
            return 'UNKNOWN PERSON'
        }
    }
}

console.log('User > ', user);
console.log('getFullName > ', new userInterFace().getFullName());
