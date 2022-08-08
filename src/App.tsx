import React, { useEffect, useState } from "react";
import {
  Badge,
  Cell,
  ConfigProvider,
  Counter,
  Epic,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  PlatformType,
  SplitCol,
  SplitLayout,
  Tabbar,
  TabbarItem,
  useAdaptivity,
  usePlatform,
  ViewWidth,
  VKCOM,
  withAdaptivity,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
} from "@vkontakte/vkui";

import { Home, Info, Loans } from "./panels";
import { Navigation } from "./components/navigation";
import { getPlatform } from "./utils";
import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { observer } from "mobx-react-lite";
import { AppStore, AppStoreProvider, AppStoreContext } from "./store";
import { useRequiredContext } from "./hooks/useRequiredContext";
import {
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28MessageOutline,
  Icon28ClipOutline,
  Icon28UserCircleOutline,
  Icon56NewsfeedOutline,
  Icon20NewsfeedSlashOutline,
} from "@vkontakte/icons";
import { ACTIVE_PANEL, ACTIVE_STORY } from "./constants";
import { Modals } from "./modals";

export const App: React.FC = () => {
  const appStore = new AppStore();
  // const setVkUser = useSetAtomState(vkUserAtom);

  // useEffect(() => {
  //   const load = async () => {
  //     const vkUser: UserInfo = await bridge.send("VKWebAppGetUserInfo");
  //     setVkUser(vkUser);
  //   };

  //   load();
  // }, []);

  return (
    <AppStoreProvider value={appStore}>
      <AppRoot>
        <AppRoutes />
      </AppRoot>
    </AppStoreProvider>
  );
};

const AppRoutes = observer(() => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivity();
  const { popup } = useRequiredContext(AppStoreContext);
  const isDesktop: boolean = (viewWidth ?? 0) >= ViewWidth.SMALL_TABLET;
  const hasHeader = platform !== VKCOM;

  return (
    <SplitLayout
      header={hasHeader && <PanelHeader separator={false} />}
      style={{ justifyContent: "center" }}
      modal={<Modals />}
      popout={popup}
    >
      {/* {isDesktop && (
        <SplitCol fixed width={280} maxWidth={280}>
          <Panel>
            {hasHeader && <PanelHeader />}
            <Group>
              <Cell
                disabled={activeStory === "home"}
                style={
                  activeStory === "home"
                    ? {
                        backgroundColor: "var(--button_secondary_background)",
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="home"
                onClick={onStoryChange}
                before={<Icon28NewsfeedOutline />}
              >
                home
              </Cell>
              <Cell
                disabled={activeStory === "insurance"}
                style={
                  activeStory === "insurance"
                    ? {
                        backgroundColor: "var(--button_secondary_background)",
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="insurance"
                onClick={onStoryChange}
                before={<Icon28ServicesOutline />}
              >
                insurance
              </Cell>
              <Cell
                disabled={activeStory === "news"}
                style={
                  activeStory === "news"
                    ? {
                        backgroundColor: "var(--button_secondary_background)",
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="news"
                onClick={onStoryChange}
                before={<Icon28MessageOutline />}
              >
                news
              </Cell>
              <Cell
                disabled={activeStory === "profile"}
                style={
                  activeStory === "profile"
                    ? {
                        backgroundColor: "var(--button_secondary_background)",
                        borderRadius: 8,
                      }
                    : {}
                }
                data-story="profile"
                onClick={onStoryChange}
                before={<Icon28UserCircleOutline />}
              >
                profile
              </Cell>
            </Group>
          </Panel>
        </SplitCol>
      )} */}

      <SplitCol
        animate={!isDesktop}
        spaced={isDesktop}
        width={isDesktop ? "560px" : "100%"}
        maxWidth={isDesktop ? "560px" : "100%"}
      >
        <AppEpics isDesktop={isDesktop} />
      </SplitCol>
    </SplitLayout>
  );
});

const AppEpics = observer(
  ({ isDesktop }: { isDesktop: boolean | undefined }) => {
    const { activePanels, activeStory, setActiveStory, setActivePanel } =
      useRequiredContext(AppStoreContext);

    const onStoryChange = (e: any) =>
      setActiveStory(e.currentTarget.dataset.story as ACTIVE_STORY);

    return (
      <Epic
        activeStory={activeStory}
        tabbar={
          !isDesktop && (
            <Tabbar>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === "home"}
                data-story="home"
              >
                <Icon28NewsfeedOutline />
              </TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === "insurance"}
                data-story="insurance"
              >
                <Icon28ServicesOutline />
              </TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === "news"}
                data-story="news"
              >
                <Icon28ClipOutline />
              </TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === "profile"}
                data-story="profile"
                // indicator={<Badge mode="prominent" />}
              >
                <Icon28UserCircleOutline />
              </TabbarItem>
            </Tabbar>
          )
        }
      >
        <View id="home" activePanel={activePanels.home}>
          <Home id="home" />
          <Loans id="loans" />
        </View>
        <View id="insurance" activePanel={activePanels.insurance}>
          <Panel id="insurance">
            <PanelHeader>Insurance</PanelHeader>
            <Group>
              <Placeholder
                icon={<Icon28ServicesOutline width={56} height={56} />}
              ></Placeholder>
            </Group>
          </Panel>
        </View>
        <View id="news" activePanel={activePanels.news}>
          <Panel id="news">
            <PanelHeader>News</PanelHeader>
            <Group>
              <Placeholder
                icon={<Icon20NewsfeedSlashOutline width={56} height={56} />}
              ></Placeholder>
            </Group>
          </Panel>
        </View>
        <View id="profile" activePanel={activePanels.profile}>
          <Panel id="profile">
            <PanelHeader>Profile</PanelHeader>
            <Group style={{ height: "1000px" }}>
              <Placeholder
                icon={<Icon28UserCircleOutline width={56} height={56} />}
              ></Placeholder>
            </Group>
          </Panel>
        </View>
      </Epic>
    );
  }
);