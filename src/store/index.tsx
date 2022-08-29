import React from "react";
import { BaseDataProvider, createDataLayout } from "./DataLayout";
import { action, computed, makeObservable, observable } from "mobx";
import {
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_POPUP,
  ACTIVE_STORY,
  DEFAULT_ACTIVE_STORY,
  PARAMS_LIST,
} from "constants/index";
import { PopoutsList } from "popouts";

type activePanels = {
  [key: string]: ACTIVE_PANEL;
};

type Params = {
  [key: string]: string;
};

export class AppStore implements BaseDataProvider {
  @observable
  activePanels: activePanels = DEFAULT_ACTIVE_STORY;

  @observable.struct
  activeStory: ACTIVE_STORY = ACTIVE_STORY.HOME;

  @observable.struct
  activeModal: ACTIVE_MODAL | null = null;

  @observable.struct
  activePopup: ACTIVE_POPUP | null = null;

  @observable.struct
  params: Params | undefined = undefined;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setActiveStory(value: ACTIVE_STORY) {
    if (value === this.activeStory) {
      this.setActivePanel(DEFAULT_ACTIVE_STORY[value], value);
    }
    this.activeStory = value;
  }

  @action.bound
  setActivePanel(value: ACTIVE_PANEL, story: ACTIVE_STORY, params?: Params) {
    this.activePanels[story] = value;
    this.params = params;
  }

  @action.bound
  setActiveRoute(value: ACTIVE_PANEL, story: ACTIVE_STORY, params?: Params) {
    this.setActiveStory(story);
    this.setActivePanel(value, story, params);
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
