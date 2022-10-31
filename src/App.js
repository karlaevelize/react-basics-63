import "./App.css";
import Button from "./components/Button";
import Title from "./components/Title";

function App() {
  const data = [
    {
      id: 1,
      sad: true,
      title: "Dog Story",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ullamcorper elit. Ut et ultricies magna, ac pellentesque nunc. Mauris egestas id velit at aliquam. Nam facilisis tempus purus, et mollis dolor iaculis quis",
    },
    {
      id: 2,
      sad: false,
      title: "Cat Story",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ullamcorper elit. Ut et ultricies magna, ac pellentesque nunc. Mauris egestas id velit at aliquam. Nam facilisis tempus purus, et mollis dolor iaculis quis",
    },
    {
      id: 3,
      sad: true,
      title: "Fish Story",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ullamcorper elit. Ut et ultricies magna, ac pellentesque nunc. Mauris egestas id velit at aliquam. Nam facilisis tempus purus, et mollis dolor iaculis quis",
    },
    {
      id: 4,
      sad: false,
      title: "Bunny Story",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ullamcorper elit. Ut et ultricies magna, ac pellentesque nunc. Mauris egestas id velit at aliquam. Nam facilisis tempus purus, et mollis dolor iaculis quis",
    },
  ];

  return (
    <>
      {data.map((story) => (
        <Title
          key={story.id}
          title={story.title}
          sad={story.sad}
          description={story.description}
        />
      ))}
      {/* <Title
        title="My dynamic title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ullamcorper elit. Ut et ultricies magna, ac pellentesque nunc. Mauris egestas id velit at aliquam. Nam facilisis tempus purus, et mollis dolor iaculis quis"
      />
      <Title
        title="Another one"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ullamcorper elit. Ut et ultricies magna, ac pellentesque nunc. Mauris egestas id velit at aliquam. Nam facilisis tempus purus, et mollis dolor iaculis quis"
      />
      <Title
        title="Test"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ullamcorper elit. Ut et ultricies magna, ac pellentesque nunc. Mauris egestas id velit at aliquam. Nam facilisis tempus purus, et mollis dolor iaculis quis"
      /> */}
      <Button />
      <p>My paragraph</p>
    </>
  );
}

export default App;
