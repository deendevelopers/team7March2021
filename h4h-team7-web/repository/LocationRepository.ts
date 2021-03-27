import { SuggestedLocation } from "./types";

class LocationRepository {

  private locations: SuggestedLocation[] = [
    {
      id: 0,
      name:"Clapham Common Band Stand",
      postcode:"SW4 0AA"
    },
    {
        id: 1,
        name:"Clapham library",
        postcode:"SW4 0AA"
    },
    {
      id: 2,
        name:"Brickwood Cafe",
        postcode:"SW4 0AA"
    }
  ];

  constructor() {}

  public getLocations() {
    return this.locations;
  }

  public getLocationById(id: number): SuggestedLocation | undefined {
    return this.locations.find(loc => loc.id === id);
  }

}

export default new LocationRepository();