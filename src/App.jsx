import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "HenryFerreira",
    name: "Henry Ferreira",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: false,
  },
  {
    userName: "HenryFerreira",
    name: "Henry Ferreira",
    isFollowing: true,
  },
];

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            formatUserName={formatUserName}
            userName={userName}
            inicialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
