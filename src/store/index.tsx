import React from "react";
import { UserInfo } from "@vkontakte/vk-bridge";
import { Snackbar } from "../types";
import { BaseDataProvider, createDataLayout } from "./DataLayout";
import { action, computed, makeObservable, observable } from "mobx";
import {
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_POPUP,
  ACTIVE_STORY,
} from "../constants";
import { PopoutsList } from "../popouts";

type activePanels = {
  [key: string]: ACTIVE_PANEL;
};

export class AppStore implements BaseDataProvider {
  @observable
  activePanels: activePanels = {
    [ACTIVE_STORY.HOME]: ACTIVE_PANEL.HOME,
    [ACTIVE_STORY.INSURANCE]: ACTIVE_PANEL.INSURANCE,
    [ACTIVE_STORY.NEWS]: ACTIVE_PANEL.NEWS,
    [ACTIVE_STORY.PROFILE]: ACTIVE_PANEL.PROFILE,
  };

  @observable.struct
  activeStory: ACTIVE_STORY = ACTIVE_STORY.HOME;

  @observable.struct
  activeModal: ACTIVE_MODAL | null = null;

  @observable.struct
  activePopup: ACTIVE_POPUP | null = null;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setActiveStory(value: ACTIVE_STORY) {
    this.activeStory = value;
  }

  @action.bound
  setActivePanel(value: ACTIVE_PANEL, story: ACTIVE_STORY) {
    this.activePanels[story] = value;
  }

  @action.bound
  openModal(modal: ACTIVE_MODAL) {
    console.log("try open modal", modal);
    this.activeModal = modal;
  }

  @action.bound
  closeModal() {
    console.log("try close modal", this.activeModal);
    this.activeModal = null;
  }

  @action.bound
  openPopup(popup: ACTIVE_POPUP) {
    this.activePopup = popup;
  }

  @action.bound
  closePopup() {
    this.activePopup = null;
  }

  @computed
  get popup() {
    return this.activePopup ? PopoutsList[this.activePopup] : null;
  }

  destroy() {
    console.log("AppStore destroy");
  }

  init() {
    console.log("init store");
  }
}

export const AppStoreContext = React.createContext<AppStore | null>(null);
export const AppStoreProvider = createDataLayout(AppStoreContext);
