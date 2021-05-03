import AdministrationPage from "../views/AdministrationPage";
import ClientContractPage from "../views/ClientContractPage";
import CorporatePage from "../views/CorporatePage";
import EcosystemPage from "../views/EcosystemPage";
import EntitiesPage from "../views/EntitiesPage";
import GroupNormsPage from "../views/GroupNormsPage";
import HomePage from "../views/HomePage";
import PeoplePage from "../views/PeoplePage";
import PrivacyPage from "../views/PrivacyPage";
import ProfilePage from "../views/ProfilePage";
import PublicationsPage from "../views/PublicationsPage";
import React from "react";
import RealEstateContractsPage from "../views/RealEstateContractsPage";
import SettingsPage from "../views/SettingsPage";
import SupplierContractPage from "../views/SupplierContractPage";
import YourNetworkPage from "../views/YourNetworkPage";
import YourPublicationsPage from "../views/YourPublicationsPage";

interface Route {
  component: React.FC;
  exact?: boolean;
  path: string;
}

export const routes: Route[] = [
  {
    component: HomePage,
    path: "/",
    exact: true,
  },
  {
    component: PublicationsPage,
    path: "/publications",
    exact: true,
  },
  {
    component: PeoplePage,
    path: "/people",
    exact: true,
  },
  {
    component: EntitiesPage,
    path: "/entities",
    exact: true,
  },
  {
    component: AdministrationPage,
    path: "/administration",
    exact: true,
  },
  {
    component: ClientContractPage,
    path: "/client-contract",
    exact: true,
  },
  {
    component: SupplierContractPage,
    path: "/supplier-contract",
    exact: true,
  },
  {
    component: CorporatePage,
    path: "/corporate",
    exact: true,
  },
  {
    component: GroupNormsPage,
    path: "/group-norms",
    exact: true,
  },
  {
    component: RealEstateContractsPage,
    path: "/real-estate-contracts",
    exact: true,
  },
  {
    component: EcosystemPage,
    path: "/ecosystem",
    exact: true,
  },
  {
    component: PrivacyPage,
    path: "/privacy",
    exact: true,
  },
  {
    component: SettingsPage,
    path: "/settings",
    exact: true,
  },
  {
    component: YourNetworkPage,
    path: "/your-network",
    exact: true,
  },
  {
    component: YourPublicationsPage,
    path: "/your-publications",
    exact: true,
  },
  {
    component: ProfilePage,
    path: "/your-profile",
    exact: true,
  },
];
