import * as React from "react";
import { SafeAreaView } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import { AppContextProvider } from "./AppContext";

import RecentGameDetails from "./components/screens/RecentGameDetails/RecentGameDetails";
import Search from "./components/screens/Search/Search";
import Summoner from "./components/screens/Summoner/Summoner";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppContextProvider>
        <NativeRouter>
          <Route exact path="/" component={ Search } />
          <Route path="/summoner" component={ Summoner } />
          <Route path="/recent-game" component={ RecentGameDetails } />
        </NativeRouter>
      </AppContextProvider>
    </SafeAreaView>
  );
};

export default App;