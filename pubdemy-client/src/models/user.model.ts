export class UserModel {
  constructor(
    public id: number = 0,
    public name: string = "",
    public password: string = "",
    public email: string = "",
  ) {}
}
