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
        Безусловно, высокотехнологичная концепция общественного уклада
        предопределяет высокую востребованность системы массового участия.
        Значимость этих проблем настолько очевидна, что синтетическое
        тестирование предопределяет высокую востребованность экспериментов,
        поражающих по своей масштабности и грандиозности. В своём стремлении
        повысить качество жизни, они забывают, что сложившаяся структура
        организации выявляет срочную потребность прогресса профессионального
        сообщества.
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
