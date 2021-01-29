import Avatar from "../avatars/Avatar";
import IronMan from "../avatars/IronMan";
import Thor from "../avatars/Thor";
import Adam from "../avatars/Adam";

const heroes = [IronMan, Thor, Adam];

const HeroAdder = (props: { addHero: Function }) => {
  const { addHero } = props;
  const avatarChoices = heroes.map((hero: Avatar) => (
    <img
      alt={hero.name}
      src={hero.img}
      onClick={() => addHero(hero.avatar)}
      style={{
        height: "120px",
        width: "auto",
        padding: "5px",
        cursor: "pointer",
      }}
    />
  ));

  return (
    <div
      style={{
        textAlign: "center",
        font: "30px Impact, sans-serif",
        height: "100%",
        width: "100%",
      }}
    >
      <h1>Choose your hero</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {avatarChoices}
      </div>
    </div>
  );
};

export default HeroAdder;
