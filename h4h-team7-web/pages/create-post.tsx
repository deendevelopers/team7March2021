import { useContext, useState } from "react";
import { Button } from "../components";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from "../store/store-context";

const SuggestedLocations = [
  {
    name: "Clapham Common Band Stand",
    postcode: "SW4 0AA",
  },
  {
    name: "Clapham library",
    postcode: "SW4 0AA",
  },
  {
    name: "Brickwood Cafe",
    postcode: "SW4 0AA",
  },
];

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"service" | "event">("event");
  const [location, setLocation] = useState<string>(SuggestedLocations[0].name);

  const { profile, createPost } = useContext(StoreContext);

  const RadioButtonClassName =
    "cursor-pointer py-3 px-4 no-underline rounded-full font-sans font-semibold text-sm border border-teal-300 hover:text-white hover:bg-teal-300 focus:outline-none active:shadow-none mr-2 flex-1 text-center";
  const SelectedRadioButtonClassName = "bg-indigo text-white";

  const applySelectedStyles = (required: "event" | "service") =>
    required === type ? SelectedRadioButtonClassName : "";

  const StyledInputDiv = (props) => (
    <div className="flex flex-col mb-4">{props.children}</div>
  );

  const handleSubmit = (e) => {
    const loc = SuggestedLocations.find((l) => l.name === location);
    e.preventDefault();
    const { username, languages, email, mobile, profile_image } = profile;
    createPost({
      title,
      description,
      type,
      host_username: username,
      host_languages: languages,
      host_email: email,
      host_mobile: mobile,
      host_profile_image: profile_image,
      location: loc,
      id: "1",
      date: new Date(),
    });
  };

  return (
    <BaseLayout>
      <div className="w-full flex flex-col">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="bg-white p-5 w-fulls mb-3">
            <h1 className="text-3xl mb-3 font-bold">Create a listing</h1>
            <p className="mb-5">Find and provide useful services and events</p>
          </div>
          <div className="bg-white p-6 w-fulls">
            <fieldset>
              <legend className="sr-only">Event or service details</legend>
              <StyledInputDiv>
                <label className="text-lg font-semibold" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  className="border-b text-lg py-2"
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value)}
                  autoComplete="off"
                />
              </StyledInputDiv>
              <StyledInputDiv>
                <label className="text-lg font-semibold" htmlFor="description">
                  Description
                </label>
                <input
                  id="description"
                  className="border-b text-lg py-2"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
                  autoComplete="off"
                />
              </StyledInputDiv>
              <StyledInputDiv>
                <label className="text-lg font-semibold mb-3" htmlFor="type">
                  Type
                </label>
                <div className="flex flex-row justify-around">
                  <label
                    className={`${RadioButtonClassName} ${applySelectedStyles(
                      "event"
                    )}`}
                  >
                    <input
                      className="appearance-none"
                      type="radio"
                      value="event"
                      checked={type === "event"}
                      onChange={() => setType("event")}
                    />
                    Event
                  </label>
                  <label
                    className={`${RadioButtonClassName} ${applySelectedStyles(
                      "service"
                    )}`}
                  >
                    <input
                      className="appearance-none"
                      type="radio"
                      value="service"
                      checked={type === "service"}
                      onChange={() => setType("service")}
                    />
                    Service
                  </label>
                </div>
              </StyledInputDiv>
              <StyledInputDiv>
                <label className="text-lg font-semibold mb-3" htmlFor="type">
                  Location
                </label>
                <select
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-2"
                >
                  {SuggestedLocations.map((loc) => (
                    <option value={loc.name} key={loc.name}>
                      {loc.name} - {loc.postcode.toUpperCase()}
                    </option>
                  ))}
                </select>
              </StyledInputDiv>
            </fieldset>
          </div>
          <div className="p-4 text-center">
            <span>Strictly no selling, no swaps, no donations.</span>
          </div>
          <div className="p-4 bg-white">
            <Button type="submit">
              <span className="text-sm font-medium">Arrange</span>
            </Button>
          </div>
        </form>
      </div>
    </BaseLayout>
  );
}
