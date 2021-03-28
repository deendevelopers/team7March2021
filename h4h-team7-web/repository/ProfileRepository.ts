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

  public async editProfile(mongoId: string): Promise<void> {
    return await MongoProfile.findByIdAndUpdate(mongoId, {}, () => {
      console.log("updated")
    })
  }

  public async getByAuthId(profileAuthId: string) {
    return await MongoProfile.findOne({auth_id: profileAuthId}).exec();
  }

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