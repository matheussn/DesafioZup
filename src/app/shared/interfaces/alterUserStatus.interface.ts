import { UserStatus } from '../enums/user-status.enum';

export interface AlterUserStatus {
    userName: String,
    status: UserStatus
}