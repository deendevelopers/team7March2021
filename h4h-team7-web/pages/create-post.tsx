import { useContext, useState } from "react";
import { Button, TopicPanel } from "../components";
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

const Switch = () => {
  return (
    <div>
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"service" | "event">("event");
  const [location, setLocation] = useState<string>(SuggestedLocations[0].name);

  const { profile, createPost } = useContext(StoreContext);

  const RadioButtonClassName =
    "cursor-pointer py-3 px-4 no-underline rounded-lg font-sans font-semibold text-sm hover:bg-gray-100  focus:outline-none active:shadow-none mr-2 flex-1 text-center";
  const SelectedRadioButtonClassName = "bg-indigo text-white hover:text-black";

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
            <p className="mb-5">
              Contribute to your local Noticeboard by volunteering any way you
              can - from reviewing a CV to just lending a listening ear. If
              someone will find it helpful, add it to the board!
            </p>
          </div>
          <div className="bg-white p-5 w-fulls mb-3">
            <div className="flex flex-row w-full">
              <label className="font-black flex-grow w-10">
                Is your post about an event at a specific time and date?
              </label>
              <div>
                <label className="switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="slider round"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 w-full">
            <fieldset>
              <legend className="sr-only">Event or service details</legend>

              <StyledInputDiv>
                <label className="text-lg font-bold" htmlFor="title">
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
                <label className="text-lg font-bold" htmlFor="description">
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

              <label className="text-lg font-bold" htmlFor="title">
                Topic(s)
              </label>

              <p>
                How would you best describe your listing? Select all that apply
              </p>
              <div className="my-5">
                <TopicPanel />
              </div>

              <StyledInputDiv>
                <label className="text-lg font-bold mb-3" htmlFor="type">
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
                <div className="flex justify-center">
                  <img
                    src="/map.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="text-center"
                  ></img>
                </div>
              </StyledInputDiv>
            </fieldset>
          </div>
          <div className="p-4 text-left">
            <span>
              Notice is about bringing your community together to help each
              other out. Strictly no selling or swapping items.
            </span>
          </div>

          <div className="bg-white p-5 w-fulls mb-3">
            <div className="flex flex-row w-full">
              <label className="font-bold flex-grow w-10">
                I'm happy for my contact details to be shared with those who respond to the post.
              </label>
              <div>
                <label className="switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="slider round"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white lg:w-1/4 m-auto mb-10">
            <Button type="submit">
              <span className="text-sm font-medium">Arrange</span>
            </Button>
          </div>
        </form>
      </div>
    </BaseLayout>
  );
}
