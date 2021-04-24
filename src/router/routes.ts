import AdministrationPage from "../views/AdministrationPage";
import ClientContractPage from "../views/ClientContractPage";
import CorporatePage from "../views/CorporatePage";
import EcosystemPage from "../views/EcosystemPage";
import EntitiesPage from "../views/EntitiesPage";
import GroupNormsPage from "../views/GroupNormsPage";
import HomePage from "../views/HomePage";
import PeoplePage from "../views/PeoplePage";
import PublicationsPage from "../views/PublicationsPage";
import React from "react";
import RealEstateContractsPage from "../views/RealEstateContractsPage";
import SupplierContractPage from "../views/SupplierContractPage";

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
];
