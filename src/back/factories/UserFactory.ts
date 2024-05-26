import { User } from "../model/User";

export class UserFactory {
  static execute(): User {
    return {
      name: 'user',
      current_pullup_level: 0,
      current_pushup_level: 0,
      current_situp_level: 0,
      current_squat_level: 0,
      tracking_pullups: 0,
      tracking_pushups: 0,
      tracking_situps: 0,
      tracking_squats: 0
    }
  }
}