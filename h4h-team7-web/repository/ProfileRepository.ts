import { mongo } from "mongoose";
import { Profile as MongoProfile, ProfileInterface } from "../models/profile";
import db from './MongoDb';

console.log(db)

class ProfileRepository {

  constructor() {}

  public async getProfiles() {
    return await MongoProfile.find({})
  }

  public async createProfile(profile: ProfileInterface): Promise<void> {
    return await MongoProfile.create(profile)
  }

  public async editProfile(profile: ProfileInterface): Promise<void> {
    return await MongoProfile.findByIdAndUpdate(profile.id, profile, {}, () => {
      console.log("updated")
    })
  }

// public async findByUsername(queryUsername: string): Promise<ProfileInterface | undefined> {
//   return await MongoProfile.find({username: queryUsername}).exec();
// }

  public async getProfileById(id: string): Promise<ProfileInterface | undefined> {
    console.log("getProfileById id: " + id )
    return await MongoProfile.findById(id).exec();
  }

  public async deleteProfile(id: string): Promise<void> {
    MongoProfile.findByIdAndDelete(id, {}, () => {
      console.log
    })
  } 
}

export default new ProfileRepository();