import { IsEnum, IsString } from "class-validator";
import { UserTypeEnums } from "../../enums/UserEnums/UserTypeEnums";

export class SendOtpRequestDto {
    @IsString()
    mobile: string;

    @IsEnum(UserTypeEnums)
    userType: UserTypeEnums
}