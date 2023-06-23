export class CourseModel {
  constructor(
    public id: number = 0,
    public title: string = "",
    public price: number = 0,
    public discountedPrice: number = 0,
    public rating: number = 0,
    public likes: number = 0,
    public imageUrl: string = "",
    public trainerName: string = "",
    public avatarUrl: string = "",
    public description: string = "",
    public studentsEnrolled: number=0
  ) {}
}
