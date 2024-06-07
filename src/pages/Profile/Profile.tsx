import { Card } from "./components";

const Profile = () => {
  return (
    <main className="flex flex-col gap-8 items-start mt-11">
      <Card title="Watching" amount={3} list={[]} />
      <Card title="Watched" amount={40} list={[]} />
      <Card title="To Watch" amount={25} list={[]} />
    </main>
  );
};

export default Profile;
