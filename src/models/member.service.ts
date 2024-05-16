
import {LoginInput, Member, MemberInput} from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Error";
import { MemberType } from "../libs/enums/member.enum";
import MemberModel from "../schema/member.model";
import bcrypt from "bcryptjs"



class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel
  }

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.STORE })
      .exec();
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel.findOne(
      {memberNick: input.memberNick}, 
      {memberNick: 1, memberPassword: 1}
    )
    .exec();
    if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    const isMatch = await bcrypt.compare(input.memberPassword, member.memberPassword);

    if (!isMatch) throw new Errors(HttpCode.UNATHORIZED, Message.WRONG_PASSWORD);

    return await this.memberModel.findById(member._id).exec()
  }
}

export default MemberService;