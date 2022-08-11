import React, { useState } from "react";
import {
  Avatar,
  Banner,
  Button,
  Card,
  CardGrid,
  Div,
  FormItem,
  Group,
  Header,
  HorizontalCell,
  HorizontalScroll,
  IconButton,
  Input,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  platform,
  Select,
  SimpleCell,
  Slider,
  Spacing,
  Tabbar,
  TabbarItem,
  Caption,
  Text,
  Title,
} from "@vkontakte/vkui";
import { UserInfo } from "@vkontakte/vk-bridge";
import { useRequiredContext } from "../../hooks/useRequiredContext";
// import { setDoneSnackbar, setErrorSnackbar } from "../hooks";
import { PanelProps } from "..";
import { AppStoreContext } from "../../store";

import styles from "./Home.module.css";
import { ACTIVE_PANEL, ACTIVE_POPUP, ACTIVE_STORY } from "../../constants";
import { PeriodFormItem } from "../../components/Form";
import { AmountFormItem } from "../../components/Form/AmountFormItem/AmountFormItem";

export const Home: React.FC<PanelProps> = ({ id }: PanelProps) => {
  // const vkUser: UserInfo = useAtomValue(vkUserAtom);

  const app = useRequiredContext(AppStoreContext);
  const { setActivePanel, openPopup } = app;

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
    // <HorizontalCell>
    //   <Banner
    //     mode="image"
    //     header="Мои Успехи"
    //     subheader="Разблокировано 9 из 36"
    //     background={
    //       <div
    //         style={{
    //           backgroundColor: "#65c063",
    //           backgroundImage:
    //             "url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)",
    //           backgroundPosition: "right bottom",
    //           backgroundSize: 320,
    //           backgroundRepeat: "no-repeat",
    //         }}
    //       />
    //     }
    //     actions={<Button mode="overlay_primary">Подробнее</Button>}
    //   />
    // </HorizontalCell>,
  ];

  return (
    <Panel id={id}>
      <PanelHeader>Home</PanelHeader>

      <Group separator="hide">
        <SimpleCell
          after={
            <Avatar
              size={72}
              src={""}
              onClick={() => openPopup(ACTIVE_POPUP.TEST)}
            />
          }
        >
          <Title level="1" style={{ marginBottom: 4 }}>
            Привет,
          </Title>
          <Title level="3">Саша Гришин</Title>
        </SimpleCell>
      </Group>

      {/* <Group separator="hide">
          <HorizontalScroll>
            <div style={{ display: "flex" }}>{sliderItem}</div>
          </HorizontalScroll>
        </Group> */}
      <Group>
        <CardGrid size="l">
          <Card mode="outline">
            <Header mode="primary">Рассчитать микрозайм</Header>
            <PeriodFormItem />
            <AmountFormItem />
            <FormItem>
              <Button
                stretched={true}
                mode="commerce"
                onClick={() =>
                  setActivePanel(ACTIVE_PANEL.LOANS, ACTIVE_STORY.HOME)
                }
              >
                Посмотреть предложения
              </Button>
            </FormItem>
            {/* <FormItem>
                <Select
                  onChange={(e) => setValue(Number(e.target.value))}
                  value={String(value)}
                  options={[
                    { value: 10, label: "10" },
                    { value: 20, label: "20" },
                  ]}
                />
              </FormItem> */}
          </Card>
        </CardGrid>
      </Group>
    </Panel>
  );
};
