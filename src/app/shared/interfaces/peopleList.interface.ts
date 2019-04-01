import { UserStatus } from '../enums/user-status.enum';

export interface PeopleList {
    results: User[];
}

export interface User {
    status?: UserStatus;
    name: {
        title: string;
        first: string;
        last: string
    };
    location: {
        street: string;
        city: string;
        state: string;
        postcode: string;
        coordinates: {
            latitude: string;
            longitude: string;
        },
        timezone: {
            offset: string;
            description: string;
        }
    },
    email: string;
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    },
    dob: {
        date: string;
        age: number;
    },
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    }
}