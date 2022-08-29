import {
  HorizontalCell,
  Banner,
  Button,
  Card,
  FormItem,
  Header,
} from "@vkontakte/vkui";
import { PeriodFormItem, AmountFormItem } from "../components/Form";
import { ACTIVE_PANEL, ACTIVE_STORY } from "../constants";

const sliderItem = [
  <HorizontalCell size="l">
    <Banner
      mode="image"
      header="Мои достижения"
      subheader="Разблокировано 9 из 36"
      background={
        <div
          style={{
            backgroundColor: "#65c063",
            backgroundImage:
              "url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)",
            backgroundPosition: "right bottom",
            backgroundSize: 320,
            backgroundRepeat: "no-repeat",
          }}
        />
      }
      actions={<Button mode="overlay_primary">Подробнее</Button>}
    />
  </HorizontalCell>,
  <HorizontalCell>
    <Banner
      mode="image"
      header="Мои Успехи"
      subheader="Разблокировано 9 из 36"
      background={
        <div
          style={{
            backgroundColor: "#65c063",
            backgroundImage:
              "url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)",
            backgroundPosition: "right bottom",
            backgroundSize: 320,
            backgroundRepeat: "no-repeat",
          }}
        />
      }
      actions={<Button mode="overlay_primary">Подробнее</Button>}
    />
  </HorizontalCell>,
];

{
  /* <Group separator="hide">
          <HorizontalScroll>
            <div style={{ display: "flex" }}>{sliderItem}</div>
          </HorizontalScroll>
        </Group> */
}

<Card mode="outline">
  <Header mode="primary">Рассчитать микрозайм</Header>
  <PeriodFormItem />
  <AmountFormItem />
  <FormItem>
    <Button
      stretched={true}
      mode="commerce"
      //   onClick={() => setActivePanel(ACTIVE_PANEL.LOANS, ACTIVE_STORY.HOME)}
    >
      Посмотреть предложения
    </Button>
  </FormItem>
</Card>;
