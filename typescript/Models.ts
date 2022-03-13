export enum Roles {
    admin = 'ADMIN',
    user = 'USER',
}

export enum Status {
    'PENDING', 'VALID', 'CANCELED', 'PAID'
}

export type User = {
    firstName: string,
    lastName: string,
    phone: number | string,
    roles: Roles,
    status: Status
}

// export default {
//     Roles,
//     Status,
//     User
// }