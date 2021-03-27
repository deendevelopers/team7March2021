import { Profile } from "./types";

class ProfileRepository {

  private profiles: Profile[] = [];

  constructor() {}

  public getProfiles() {
    return this.profiles;
  }

  public createProfile(profile: Profile): void {
    this.profiles = [...this.profiles, profile]
  }

  public editProfile(profile: Profile): void {
    this.profiles = this.profiles.map(p => p.id === profile.id ? profile : p);
  }

  public getProfileById(id: number): Profile | undefined {
    return this.profiles.find(profile => profile.id === id);
  }

}

export default new ProfileRepository();