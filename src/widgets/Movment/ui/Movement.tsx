import { MultiContainer, Typography } from "@/shared/ui";
import style from "./Movement.module.scss";

const Movement = () => {
  const cards = [
    {
      title: "Преимущество",
      description:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
    {
      title: "Преимущество",
      description:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
    {
      title: "Преимущество",
      description:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
    {
      title: "Преимущество",
      description:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
  ];
  return (
    <MultiContainer>
      <Typography className={style.title} variant="h6" color="black">
        О движении
      </Typography>

      <Typography className={style.bodyText} variant="bodyText" color="black">
       Внезапно, ключевые особенности структуры проекта являются только методом политического участия и в равной степени предоставлены сами себе. 
      </Typography>

      <div className={style.cards}>
        <div className={style.card}>
          {cards.map((card, index) => {
            return (
              <div key={index} className={style.cardItem}>
                <div className={style.wrapperCircleOfCard}>
                  <div className={style.circleOfCard}>
                    <div></div>
                  </div>
                </div>
                <Typography
                  className={style.cardTitle}
                  variant="h6"
                  color="black"
                >
                  {card.title}
                </Typography>
                <Typography
                  className={style.cardDescription}
                  variant="bodyText"
                  color="black"
                >
                  {card.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </MultiContainer>
  );
};

export default Movement;
