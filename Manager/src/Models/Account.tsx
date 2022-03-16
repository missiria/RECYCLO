export interface BaseAccount {
    type: string;
    gender: string;

    address?: string;
    avatar?: string;
    city?: string;
    country?: string;
    nationality?: string;
    society_id?: string;
    zip_code?: number;
}

export interface AccountType extends BaseAccount {
    id?: number;
}