import HackathonList from "@/components/Hackathons/HackathonList/HackathonList";

export default function Home() {
  return (
    <div>
      <h1 className="main-header">Доступні хакатони:</h1>
        <HackathonList />
    </div>
  );
}
